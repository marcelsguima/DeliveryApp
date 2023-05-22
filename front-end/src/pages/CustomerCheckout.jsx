import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import myContext from '../context/MyContext';

function CustomerCheckout() {
  const { totalPrice, handleRemoveFromCart } = useContext(myContext);
  const carrinho = JSON.parse(localStorage.getItem('carrinho'));
  const history = useHistory();

  const countProducts = () => {
    const countedProducts = {};

    carrinho.forEach((item) => {
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

  const handleCheckout = () => {
    const dataSale = {
      status: 'Pendente',
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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {countProducts().map((product) => (
            <tr key={ product.id }>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                R$
                {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </td>
              <td>
                R$
                {(Number(product.subtotal)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </td>
              <td>
                <button onClick={ () => handleRemoveFromCart(product) }>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
        Total: R$
        {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>

      <button onClick={ handleCheckout }>Finalizar pedido</button>
    </div>
  );
}
