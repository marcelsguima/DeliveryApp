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

  const handleAddToCart = (item) => {
    // adiciona um item ao carrinho
    const newCartItems = [...cartProducts, item];
    setCartProducts(newCartItems);
    // Guardando o valor total do carrinho
    setTotalPrice((total) => total + parseFloat(item.price));
    console.log(totalPrice);

    // salva o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(newCartItems));
  };

  const handleRemoveFromCart = (product) => {
    const indexToRemove = cartProducts.findIndex((item) => item.id === product.id);
    if (indexToRemove === magicNumber) return;

    const newQuantities = { ...quantities };
    delete newQuantities[product.id]; // remove o item do objeto de quantidades
    console.log(newQuantities);
    const newCartProducts = [...cartProducts];
    newCartProducts.splice(indexToRemove, 1);
    setCartProducts(newCartProducts);
    setQuantities(newQuantities); // atualiza as quantidades

    // Guardando o valor total do carrinho
    setTotalPrice(parseFloat(totalPrice - product.price));

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
  const handleDecrement = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: (quantities[productId] || 0) - 1,
    });
  };

  const handleClickCart = () => {
    history.push('checkout');
  };

  // const getUserLocalHost = () => JSON.parse(localStorage.getItem('user'));

  const value = useMemo(() => ({
    cartProducts,
    handleAddToCart,
    setCartProducts,
    totalPrice,
    quantities,
    setQuantities,
    handleRemoveFromCart,
    handleIncrement,
    handleDecrement,
    handleClickCart,
    // getUserLocalHost,
  }), [cartProducts, handleAddToCart, setCartProducts,
    totalPrice, quantities, setQuantities,
    handleRemoveFromCart, handleIncrement, handleDecrement]);

  return (
    <myContext.Provider value={ value }>
      { children }
    </myContext.Provider>
  );
}

export default MyProvider;
