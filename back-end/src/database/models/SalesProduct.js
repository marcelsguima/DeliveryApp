const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const SalesProduct = sequelize.define('SalesProduct', {
  quantity: DataTypes.INTEGER
}, {
  indexes: [
    {
      unique: true,
      fields: ['sale_id', 'product_id']
    }
  ]
});

module.exports = SalesProduct;
