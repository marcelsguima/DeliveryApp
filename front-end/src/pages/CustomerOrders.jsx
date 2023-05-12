import React from 'react';
import { allOrders } from '../mocks/mock.costumerOrders';

export default function CustomerOrders() {
  const CUSTOMER = 'customer_orders';
  const PRODUCTS = 'customer_products';
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a
              href="/products"
              data-testid={ `${CUSTOMER}__element-navbar-link-products` }
            >
              Produtos
            </a>
          </li>
          <li>
            <a
              href="/pedidos"
              data-testid={ `${CUSTOMER}__element-navbar-link-orders` }
            >
              Pedidos
            </a>
          </li>
        </ul>
        <div>
          <span data-testid={ `${CUSTOMER}__element-navbar-user-full-name` }>
            Nome da pessoa usuária
          </span>
          <button type="button" data-testid={ `${CUSTOMER}__element-navbar-link-logout` }>
            Logout
          </button>
        </div>
      </nav>
      {allOrders.map((e) => (
        <div key={ e.order_id }>

          <h1 data-testid={ `${PRODUCTS}__element-order-id-${e.order_id}` }>
            {e.order_id}
          </h1>

          <span data-testid={ `${PRODUCTS}__element-delivery-status-${e.order_id}` }>
            {e.order_status}
          </span>

          <span data-testid={ `${PRODUCTS}__element-order-date-${e.order_id}` }>
            {e.sale_date}
          </span>

          <span data-testid={ `${PRODUCTS}__element-card-price-${e.order_id}` }>
            R$
            {' '}
            {e.order_value}
          </span>

          <span data-testid={ `${PRODUCTS}__element-card-address-${e.order_id}` }>
            {e.order_address}
          </span>

        </div>
      ))}

      <span data-testid={ `${PRODUCTS}__checkout-bottom-value` }>
        0
      </span>

    </div>

  );
}
