const express = require('express');
const { registerSale } = require('../controllers/sale.controller');

const registerRouter = express.Router();

registerRouter.post('/customer/checkout', registerSale);

module.exports = registerRouter;
