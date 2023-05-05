const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createCustomer = async (name, email, password) => {
  if (name.length < 12 || !emailRegex.test(email) || password.length < 6) {
    return { status: 400, message: { message: 'Valores inválidos' } };
  }

  const result = await User.findOne({ where: { [Op.or]: { email, name } } });
  if (result) {
    return { status: 409, message: { message: 'Usuário já cadastrado' } };
  }

  const user = await User.create({
    name,
    email,
    password: md5(password),
    role: 'customer',
  });
  delete user.dataValues.password;
  return user;
};

module.exports = { createCustomer };
