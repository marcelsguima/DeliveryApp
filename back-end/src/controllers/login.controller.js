const md5 = require('md5');
const loginService = require('../services/login.service');
const { generateToken } = require('../middleware/tokenGenerator');

const createUser = async (req, res) => {
  const { email } = req.body;
  const toEncodePassword = req.body.password;
  const password = md5(toEncodePassword);
   if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }
  const newUser = await loginService.login(email, password);
  if (!newUser) {
    return res.status(404).json({ message: 'Invalid fields' });
  }
  const toToken = newUser.dataValues;
  const token = generateToken(toToken);
  return res.status(200).json({ 
    name: newUser.name,
    email,
    role: newUser.role,
    token });
};

module.exports = {
    createUser,
    
};
