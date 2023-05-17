import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import myContext from './MyContext';
import { requestProducts } from '../services/requests';

function MyProvider({ children }) {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await requestProducts('/products');
    setProducts(data);
  };

  const history = useHistory();
  const parceTotal = parseFloat(totalPrice);

  const handleIncrement = (productId, price) => {
    setTotalPrice((+parceTotal + +price).toFixed(2));
    return quantities[productId] ? setQuantities({
      ...quantities,
      [productId]: quantities[productId] + 1,
    })
      : setQuantities({
        ...quantities,
        [productId]: (quantities[productId] || 0) + 1,
      });
  };

  const handleDecrement = (productId, price) => {
    if (quantities[productId] > 0) {
      const some = ((+parceTotal - +price).toFixed(2));
      setTotalPrice(some >= 0 ? some : 0);

      setQuantities({
        ...quantities,
        [productId]: (quantities[productId] || 0) - 1,
      });
    }
  };

  const handleInputNumber = (id, price, element) => {
    if (element.target.value >= 0) {
      setQuantities({
        ...quantities,
        [id]: Number(element.target.value),
      });
      const newQuantities = quantities[id] || 0;
      const newPrice = Number(newQuantities) * Number(price);
      const newTotal = Number(element.target.value) * Number(price);

      setTotalPrice(parseFloat(
        Number(parceTotal) - Number(newPrice) + Number(newTotal),
      ).toFixed(2));
    } else {
      setQuantities({
        ...quantities,
        [id]: 0,
      });
    }
  };

  const handleClickCart = () => {
    const product = Object.entries(quantities).filter((prod) => prod[1] > 0);
    const getQuantities = product.map((prod) => {
      const foundProduct = products.find(
        (element) => Number(element.id) === Number(prod[0]),
      );
      return {
        ...foundProduct,
        quantity: prod[1],
      };
    });
    setCartProducts(getQuantities);
    localStorage.setItem('carrinho', JSON.stringify(getQuantities));
    history.push('checkout');
  };

  const value = useMemo(() => ({
    quantities,
    parceTotal,
    cartProducts,
    products,
    getProducts,
    handleIncrement,
    handleDecrement,
    handleInputNumber,
    handleClickCart,
  }), [handleIncrement, handleDecrement,
    handleInputNumber, handleClickCart,
    getProducts, products, quantities,
    parceTotal, cartProducts,
    products]);

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
