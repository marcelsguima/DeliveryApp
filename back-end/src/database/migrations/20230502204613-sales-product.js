'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales-products', {
      sale_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      product_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales-products');
  }
};
