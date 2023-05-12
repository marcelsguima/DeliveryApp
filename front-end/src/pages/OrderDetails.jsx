import React from 'react';
import orders from '../mocks/mock.orderDetails';

export default function CustomerOrders() {
  const CUSTOMER = 'customer_orders';
  return (
    <div>
      <nav>

        <a
          href="/orders"
          data-testid={ `${CUSTOMER}__element-navbar-link-orders` }
        >
          Produtos
        </a>

        <a
          href="/pedidos"
          data-testid={ `${CUSTOMER}__element-navbar-link-orders` }
        >
          Pedidos
        </a>

        <div>
          <span data-testid={ `${CUSTOMER}__element-navbar-user-full-name` }>
            Nome da pessoa usuária
          </span>
          <button
            type="button"
            data-testid={ `${CUSTOMER}__element-navbar-link-logout` }
          >
            Logout
          </button>
        </div>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((e) => (
            <tr key={ e.id }>
              <td data-testid={ `${CUSTOMER}__element-card-title${e.id}` }>
                {e.id}
              </td>
              <td data-testid={ `${CUSTOMER}__element-card-title${e.id}` }>
                {e.name}
              </td>
              <td>
                <input
                  type="number"
                  placeholder="0"
                  data-testid={ `${CUSTOMER}__input-card-quantity${e.id}` }
                />
              </td>
              <td data-testid={ `${CUSTOMER}__element-card-price${e.id}` }>
                R$
                {' '}
                {e.price}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `${CUSTOMER}__button-card-remove${e.id}` }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" data-testid={ `${CUSTOMER}__button-cart` }>
        Ver Carrinho
      </button>
      <span data-testid={ `${CUSTOMER}__checkout-bottom-value` }>0</span>
    </div>
  );
}
