const express = require('express');
const { registerSale, getSaleById } = require('../controllers/sale.controller');
// const validations = require('../middleware/validations');

const registerRouter = express.Router();

registerRouter.post('/customer/checkout', registerSale);
registerRouter.get('/customer/orders/:id', getSaleById);

module.exports = registerRouter;

// validations.tokenValidation,