module.exports = (sequelize, DataTypes) => {
 const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
    },
userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    sale_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'Pendente',
    },
  }, { timestamps: false,
    tableName: 'sales',
  });
 Sale.associate = (models) => {
 Sale.belongsTo(models.User, { foreignKey: 'user_id' });
    Sale.belongsTo(models.User, { foreignKey: 'seller_id' });
    Sale.belongsToMany(models.Product, { through: models.SalesProduct });
  }; return Sale; 
};