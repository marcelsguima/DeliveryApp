import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestProducts } from '../services/requests';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const getProducts = async () => {
    const data = await requestProducts('/products');
    setProducts(data);
  };

  const getUserLocalHost = () => JSON.parse(localStorage.getItem('user'));

  const signOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  useEffect(() => {
    getProducts();
  }, []);
  const CUSTOMER = 'customer_products';
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
            { getUserLocalHost().name }
          </span>
          <button
            type="button"
            data-testid={ `${CUSTOMER}__element-navbar-link-logout` }
            onClick={ signOut }
          >
            Logout
          </button>
        </div>
      </nav>
      {products.map((e) => (
        <div key={ e.id }>
          <span data-testid={ `${CUSTOMER}__element-card-price-${e.id}` }>
            {e.price.toString().replace(/\./, ',')}
          </span>
          <img
            src={ e.url_image }
            alt={ e.name }
            data-testid={ `${CUSTOMER}__img-card-bg-image-${e.id}` }
          />
          <h1 data-testid={ `${CUSTOMER}__element-card-title-${e.id}` }>
            {e.name}
          </h1>
          <button
            type="button"
            data-testid={ `${CUSTOMER}__button-card-rm-item-${e.id}` }
          >
            -
          </button>
          <input
            type="number"
            placeholder="0"
            value={ 0 }
            data-testid={ `${CUSTOMER}__input-card-quantity-${e.id}` }
          />
          <button
            type="button"
            data-testid={ `${CUSTOMER}__button-card-add-item-${e.id}` }
          >
            +
          </button>
        </div>
      ))}
      <button type="button" data-testid={ `${CUSTOMER}__button-cart` }>
        Ver Carrinho
      </button>
      <span data-testid={ `${CUSTOMER}__checkout-bottom-value` }>
        0
      </span>

    </div>

  );
}
