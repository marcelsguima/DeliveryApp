const { User } = require('../database/models');

const sellers = async () => User.findAll({ 
  where: { role: 'seller' }, attributes: { exclude: ['password'] } });

module.exports = { sellers }; 
