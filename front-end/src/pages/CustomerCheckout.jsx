import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import AbstractTable from '../components/AbstractTable';
import { requestSellers } from '../services/requests';

export default function CustomerCheckout() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState('');
  const [getSeller, setGetSeller] = useState([]);
  const [deliveryAddress, setdAliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [getSellerId, setGetSellerId] = useState('');

  const getSellers = async () => {
    const data = await requestSellers('/sellers');
    setGetSellerId(data[0].id);
    setGetSeller(data);
  };

  const history = useHistory();

  const getStorageData = (storageName) => {
    const data = JSON.parse(localStorage.getItem(storageName));
    return data;
  };

  const countProducts = () => {
    const countedProducts = {};

    cart.forEach((item) => {
      const { id, name, price } = item;

      if (!countedProducts[id]) {
        countedProducts[id] = {
          id,
          name,
          quantity: 1,
          price,
          subtotal: price,

        };
      } else {
        countedProducts[id].quantity += 1;
        countedProducts[id].subtotal = price * countedProducts[id].quantity;
      }
    });

    return Object.values(countedProducts);
  };

  const totalPrice = () => {
    const text = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0,
    );
    return text.toFixed(2).replace('.', ',');
  };
  const saleDate = new Date();

  const handleCheckout = () => {
    const dataSale = {
      sellerId: getSellerId,
      totalPrice: Number(totalPrice().replace(',', '.')),
      deliveryAddress,
      deliveryNumber,
      saleDate,
      products: countProducts(),
    };

    axios.post('http://localhost:3001/customer/checkout', dataSale).then((response) => {
      console.log('sale: ', response.data);
      const saleId = response.data.id;

      localStorage.removeItem('carrinho');

      history.push(`/customer/orders/${saleId}`);
    }).catch((err) => {
      console.log('deu erro', err);
    });
  };

  const deleteItem = (itemId) => {
    const result = cart.filter((item) => item.id !== itemId);
    localStorage.setItem('carrinho', JSON.stringify([...result]));
    setCart(getStorageData('carrinho'));
  };

  useEffect(() => {
    setUser(getStorageData('user'));
  }, []);

  useEffect(() => {
    setCart(getStorageData('carrinho'));
    getSellers();

    return () => {
      setCart([]);
    };
  }, [user]);

  return (
    <div>
      <Header />
      <div>
        <h2>Finalizar Pedido</h2>
        <AbstractTable
          valuesTable={ cart }
          deleteItem={ deleteItem }
        />
        <h1>
          Total: R$
          {' '}
          <span data-testid="customer_checkout__element-order-total-price">
            {totalPrice()}
          </span>
        </h1>
      </div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <div>
        <div>
          <label htmlFor="sellers">
            P. Vendedora Responsável
            <select
              id="sellers"
              data-testid="customer_checkout__select-seller"
              onChange={ ({ target }) => { setGetSellerId(target.value); } }
            >
              {getSeller.map((sellerAvaible) => (
                <option
                  key={ sellerAvaible.id }
                  value={ sellerAvaible.id }
                >
                  {sellerAvaible.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="adress">
            Endereço
            <input
              id="adress"
              type="text"
              data-testid="customer_checkout__input-address"
              value={ deliveryAddress }
              onChange={ ({ target }) => setdAliveryAddress(target.value) }
            />
          </label>
          <label htmlFor="adress-number">
            Número
            <input
              id="adress-number"
              type="text"
              data-testid="customer_checkout__input-address-number"
              value={ deliveryNumber }
              onChange={ ({ target }) => setDeliveryNumber(target.value) }
            />
          </label>
        </div>
      </div>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleCheckout }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
