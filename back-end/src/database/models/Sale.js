const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Sale = sequelize.define('Sale', {
  total_price: DataTypes.DECIMAL(9, 2),
  delivery_address: DataTypes.STRING(100),
  delivery_number: DataTypes.STRING(50),
  sale_date: DataTypes.DATE,
  status: DataTypes.STRING
});

Sale.associate = function(models) {
  Sale.belongsTo(models.User, { as: 'buyer', foreignKey: 'user_id' });
  Sale.belongsTo(models.User, { as: 'seller', foreignKey: 'seller_id' });
  Sale.belongsToMany(models.Product, { through: models.SalesProduct });
};

module.exports = Sale;
