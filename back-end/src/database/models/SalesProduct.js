module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'sales_products',
  });

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sale, { foreignKey: 'sale_id' });
    SalesProduct.belongsTo(models.Product, { foreignKey: 'product_id' });
  };

  return SalesProduct;
};