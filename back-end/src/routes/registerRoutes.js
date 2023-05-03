const { Router } = require('express');
const { createCustomer } = require('../controllers/registerController');

const userRouter = Router();

userRouter.post('/register', createCustomer);

module.exports = userRouter;
