import React from 'react';
import PropTypes from 'prop-types';

export default function AbstractTable({ valuesTable, deleteItem }) {
  const CHECKOUT = 'customer_checkout';

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitario</th>
          <th>Sub-Total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {valuesTable.map((itemCarts, index) => (
          <tr
            key={ itemCarts.id }
          >
            <td
              data-testid={ `${CHECKOUT}__element-order-table-item-number-${index}` }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `${CHECKOUT}__element-order-table-name-${index}` }
            >
              {itemCarts.name}
            </td>
            <td
              data-testid={ `${CHECKOUT}__element-order-table-quantity-${index}` }
            >
              {itemCarts.quantity}
            </td>
            <td>
              <span
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {`R$ ${(itemCarts.price)
                  .toString()
                  .replace('.', ',')}`}
              </span>
            </td>
            <td>
              <span
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {`R$ ${(itemCarts.price * itemCarts.quantity)
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}`}
              </span>
            </td>
            <td>
              <button
                name={ itemCarts.id }
                type="button"
                data-testid={ `${CHECKOUT}__element-order-table-remove-${index}` }
                onClick={ ({ target }) => deleteItem(Number(target.name)) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
AbstractTable.defaultProps = {
  deleteItem: null,
};

AbstractTable.propTypes = {
  valuesTable: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  deleteItem: PropTypes.func,
};
