import React from 'react';
import { useHistory, Link } from 'react-router-dom';
// import myContext from '../context/MyContext';

export default function Header() {
  const CUSTOMER = 'customer_products';
  const history = useHistory();

  //   const {
  //     getUserLocalHost,
  //   } = useContext(myContext);

  const localStorageClear = () => {
    localStorage.clear();
    history.push('/login');
  };

  const getUserLocalHost = () => JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <ul>
        <Link
          to="/products"
          data-testid={ `${CUSTOMER}__element-navbar-link-products` }
        >
          <li>
            Produtos
          </li>
        </Link>
        <li>
          <Link
            to="/pedidos"
            data-testid={ `${CUSTOMER}__element-navbar-link-orders` }
          >
            Meus Pedidos
          </Link>
        </li>
      </ul>
      <div>
        <span data-testid={ `${CUSTOMER}__element-navbar-user-full-name` }>
          {getUserLocalHost()?.name || ''}
        </span>
        <Link
          to="/login"
          type="button"
        >
          <button
            type="button"
            data-testid={ `${CUSTOMER}__element-navbar-link-logout` }
            onClick={ () => localStorageClear() }
          >
            Sair
          </button>
        </Link>
      </div>
    </nav>
  );
}
