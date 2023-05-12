import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/MyContext';
import { requestProducts } from '../services/requests';
import Header from './Header';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await requestProducts('/products');
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  const CUSTOMER = 'customer_products';

  const {
    handleAddToCart,
    totalPrice,
    quantities,
    handleDecrement,
    handleIncrement,
    handleRemoveFromCart,
    handleClickCart,
    cartProducts,
  } = useContext(myContext);
  
  return (
    <div>
      <Header />
      {products.map((e) => (
        <div key={ e.id }>
          <span data-testid={ `${CUSTOMER}__element-card-price-${e.id}` }>
            {`R$ ${e.price.replace(/\./, ',')}`}
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
            data-testid={ `${CUSTOMER}__input-card-quantity-${e.id}` }
            value={ quantities[e.id] || 0 }
            readOnly
          />
          <button
            type="button"
            data-testid={ `${CUSTOMER}__button-card-add-item-${e.id}` }
            onClick={ () => {
              handleAddToCart(e);
              handleIncrement(e.id);
            } }
          >
            +
          </button>
        </div>
      ))}
      <button
        type="button"
        data-testid={ `${CUSTOMER}__button-cart` }
        onClick={ handleClickCart }
        disabled={ cartProducts.length === 0 }
      >
        Ver Carrinho
      </button>
      <span data-testid={ `${CUSTOMER}__checkout-bottom-value` }>
      {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>

    </div>

  );
}
