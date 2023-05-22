import React, { useContext, useEffect } from 'react';
import myContext from '../context/MyContext';
import Header from './Header';

export default function CustomerProducts() {
  const CUSTOMER = 'customer_products';

  const {
    parceTotal,
    quantities,
    products,
    getProducts,
    handleIncrement,
    handleDecrement,
    handleInputNumber,
    handleClickCart,
  } = useContext(myContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <Header />
      {products ? (
        products.map((e) => (
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
              onClick={ () => handleDecrement(e.id, e.price) }
              // disabled={ +quantities[e.id] === 0 || !quantities[e.id] }
            >
              -
            </button>
            <input
              type="number"
              placeholder="0"
              value={ quantities[e.id] || 0 }
              data-testid={ `${CUSTOMER}__input-card-quantity-${e.id}` }
              onChange={ (prod) => handleInputNumber(e.id, e.price, prod) }
            />
            <button
              type="button"
              data-testid={ `${CUSTOMER}__button-card-add-item-${e.id}` }
              onClick={ () => handleIncrement(e.id, e.price) }
            >
              +
            </button>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
      <button
        type="button"
        data-testid={ `${CUSTOMER}__button-cart` }
        onClick={ handleClickCart }
        disabled={ +parceTotal === 0 }
      >
        Ver Carrinho
      </button>
      <span data-testid={ `${CUSTOMER}__checkout-bottom-value` }>
        {parceTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
    </div>
  );
}
