const userService = require('../services/userService');
const { generateToken } = require('../middleware/tokenGenerator');
const { createRegister } = require('../middleware/validations');

const deleteMe = async (req, res) => {
  const userId = req.payload.id;
  await userService.deleteMe(userId);
  return res.status(204).json();
};

const getAll = async (req, res) => {
  const users = await userService.getAll();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  res.status(200).json(user);
};

const registerUser = async (req, res) => {
  try {
  const { name, email, password, role } = await createRegister.validateAsync(req.body);
    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      return res.status(409).json({ message: 'Usuário já cadastrado' });
    }
    const newUser = await userService.registerUser(name, email, password, role);
    console.log(newUser, 'NEWUSER');
    const token = generateToken(newUser);
    res.status(201).json({ name, email, role, token });
  } catch (err) {
    console.error(err.message);
    if (err.isJoi) {
      return res.status(400).json({ message: err.details[0].message });
    }
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
    getAll,
    registerUser,
    getUserById,
    deleteMe,
};
