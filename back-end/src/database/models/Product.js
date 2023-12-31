module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING(200),
  }, {
    timestamps: false,
    tableName: 'products',
  });

  Product.associate = (models) => {
    Product.belongsToMany(models.Sale, { through: models.SalesProduct });
  };

  return Product;
};