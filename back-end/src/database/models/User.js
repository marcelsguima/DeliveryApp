module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  }, { tableName: 'users',
    timestamps: false,
  });
  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'user_id' });
    User.hasMany(models.Sale, { foreignKey: 'seller_id' });
  };
 return User;
};