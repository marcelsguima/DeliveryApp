import React, { useContext, useEffect } from 'react';
import products from '../mocks/mock.products';
import myContext from '../context/MyContext';

export default function CustomerProducts() {
  const CUSTOMER = 'customer_products';

  const {
    handleAddToCart,
    setCartProducts, totalPrice,
    quantities,
    handleDecrement,
    handleIncrement,
    handleRemoveFromCart,
  } = useContext(myContext);
  const initialCartProducts = JSON.parse(localStorage.getItem('carrinho')) || [];

  useEffect(() => {
    setCartProducts(initialCartProducts);
  }, [setCartProducts]);

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
      {products.map((e) => (
        <div key={ e.id }>
          <span data-testid={ `${CUSTOMER}__element-card-price${e.id}` }>
            R$
            {' '}
            {e.price}
          </span>
          <img
            src={ e.url_image }
            alt={ e.name }
            data-testid={ `${CUSTOMER}__img-card-bg-image${e.id}` }
          />

          <h1 data-testid={ `${CUSTOMER}__element-card-title${e.id}` }>
            {e.name}
          </h1>
          <button
            type="button"
            data-testid={ `${CUSTOMER}__button-card-rm-item${e.id}` }
            onClick={ () => {
              handleRemoveFromCart(e);
              handleDecrement(e.id);
            } }
            disabled={ quantities[e.id] === 0 || !quantities[e.id] }
          >
            -
          </button>
          <input
            type="number"
            placeholder="0"
            data-testid={ `${CUSTOMER}__input-card-quantity${e.id}` }
            value={ quantities[e.id] || 0 }
            readOnly
          />
          <button
            type="button"
            data-testid={ `${CUSTOMER}__button-card-add-item${e.id}` }
            onClick={ () => {
              handleAddToCart(e);
              handleIncrement(e.id);
            } }
          >
            +
          </button>
        </div>
      ))}
      <button type="button" data-testid={ `${CUSTOMER}__button-cart` }>
        Ver Carrinho
      </button>
      <span data-testid={ `${CUSTOMER}__checkout-bottom-value` }>
        { `R$ ${totalPrice.toFixed(2)}` }
      </span>

    </div>

  );
}
