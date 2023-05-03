const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Product = sequelize.define('Product', {
  name: DataTypes.STRING(100),
  price: DataTypes.DECIMAL(4, 2),
  url_image: DataTypes.STRING(200)
});

Product.associate = function(models) {
  Product.belongsToMany(models.Sale, { through: models.SalesProduct });
};

module.exports = Product;
