import React, { useContext } from "react";
import myContext from "../context/MyContext";

function CustomerCheckout() {
  const { totalPrice, handleRemoveFromCart } = useContext(myContext);
  const carrinho = JSON.parse(localStorage.getItem("carrinho"));

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
        countedProducts[id].subtotal = price * countedProducts[id].quantity;;
      }
    });

    return Object.values(countedProducts);
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
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
              <td>R$ {(Number(product.subtotal)).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
              <td>
                 <button onClick={() => handleRemoveFromCart(product)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>Total: R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
    </div>
  );
}

export default CustomerCheckout;
