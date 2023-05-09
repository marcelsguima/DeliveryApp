const md5 = require('md5');
const { User } = require('../database/models');

const getAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const getUserById = async (id) => User.findOne({
    where: { id }, attributes: { exclude: ['password'] } });

const registerUser = async (name, email, password) => {
  const user = await User.create({
    name,
    email,
    password: md5(password),
    role: 'customer',
  });
  console.log(user, 'USER');
   return user.dataValues.id;
};

const deleteMe = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = { 
    getAll, 
    registerUser,
    getUserByEmail,
    getUserById,
    deleteMe,
 };
