const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING,
  role: DataTypes.STRING
});

User.associate = function(models) {
  User.hasMany(models.Sale, { foreignKey: 'user_id' });
  User.hasMany(models.Sale, { foreignKey: 'seller_id' });
};

module.exports = User;
