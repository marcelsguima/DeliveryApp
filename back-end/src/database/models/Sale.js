module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'Pendente',
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId' });
    Sale.belongsToMany(models.Product, { through: models.SalesProduct });
  };

  return Sale;
};
