import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/MyContext';

export default function Header() {
  const CUSTOMER = 'customer_products';

  const {
    getUserLocalHost,
  } = useContext(myContext);

  const localStorageClear = () => {
    console.log(rote);
    localStorage.clear();
  };

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
          {getUserLocalHost().name}
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
