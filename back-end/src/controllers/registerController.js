const userService = require('../services/registerService');

const createCustomer = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await userService.createCustomer(name, email, password);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { createCustomer };
