const express = require('express');
const { createCustomer } = require('../controllers/registerController');

const userRouter = express.Router();

userRouter.post('/register', createCustomer);

module.exports = userRouter;
