const express = require('express');
const { createCustomer } = require('../controllers/registerController');

const registerRouter = express.Router();

registerRouter.post('/', createCustomer);

module.exports = registerRouter;
