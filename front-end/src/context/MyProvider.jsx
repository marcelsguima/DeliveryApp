import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import myContext from './MyContext';

function MyProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0, () => {
    const initialCartProducts = JSON.parse(localStorage.getItem('carrinho')) || [];
    return initialCartProducts.reduce((total, product) => total + parseFloat(product.price), 0);
  });

  const magicNumber = -1;
  const history = useHistory();
  const parceTotal = parseFloat(totalPrice);

  const handleAddToCart = (item) => {
    // adiciona um item ao carrinho
    const newCartItems = [...cartProducts, item];
    setCartProducts(newCartItems);
    // Guardando o valor total do carrinho
    setTotalPrice((total) => total + parseFloat(item.price));
    console.log('Add', totalPrice);
    // salva o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(newCartItems));
  };

  const handleRemoveFromCart = (product) => {
    const indexToRemove = cartProducts.findIndex((item) => item.id === product.id);
    if (indexToRemove === magicNumber) return;

    const newQuantities = { ...quantities };
    delete newQuantities[product.id]; // remove o item do objeto de quantidades

    const newCartProducts = [...cartProducts];
    newCartProducts.splice(indexToRemove, 1);
    setCartProducts(newCartProducts);
    setQuantities(newQuantities); // atualiza as quantidades

    // Guardando o valor total do carrinho

    setTotalPrice(parseFloat(parceTotal - product.price));

    localStorage.setItem('carrinho', JSON.stringify(newCartProducts));
  };

  // Função que vai ser utilizada para incrementar o input de quantidade
  const handleIncrement = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: (quantities[productId] || 0) + 1,
    });
  };

  // Função que vai ser utilizada para decrementar o input de quantidade
  const handleDecrement = (product, price) => {
    setQuantities({
      ...quantities,
      [product]: (quantities[product] || 0) - 1,
    });

    const newPrice = (Number(parceTotal) - Number(price).toFixed(2));
    setTotalPrice(newPrice >= 0 ? newPrice : 0);
  };

  const handleInputNumber = (id, price) => (element) => {
    if (element.target.value) {
      setQuantities({
        ...quantities,
        [id]: Number(element.target.value),
      });
      const newQuantities = quantities[id] || 0;
      const newPrice = Number(newQuantities) * Number(price);
      const newTotal = Number(element.target.value) * Number(price);
      console.log('ParcePrice:', typeof parceTotal);

      setTotalPrice(parseFloat(
        Number(parceTotal) - Number(newPrice) + Number(newTotal),
      ).toFixed(2));
      console.log('TotalPrice:', typeof totalPrice);
      console.log('NewPrice:', typeof newPrice);
    } else {
      setQuantities(parseFloat({
        ...quantities,
        [id]: 0,
      }).toFixed(2));
    }
  };

  const handleClickCart = () => {
    history.push('checkout');
  };

  // const getUserLocalHost = () => JSON.parse(localStorage.getItem('user'));

  const value = useMemo(() => ({
    cartProducts,
    handleAddToCart,
    setCartProducts,
    parceTotal,
    setTotalPrice,
    quantities,
    setQuantities,
    handleRemoveFromCart,
    handleIncrement,
    handleDecrement,
    handleClickCart,
    handleInputNumber,
    // getUserLocalHost,
  }), [cartProducts, handleAddToCart, setCartProducts,
    parceTotal, quantities, setQuantities,
    handleRemoveFromCart, handleIncrement, handleDecrement]);

  return (
    <myContext.Provider value={ value }>
      { children }
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
