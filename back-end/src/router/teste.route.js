const express = require('express');

const { sellers } = require('../controllers/teste.controller');

const sellerRouter = express.Router();

sellerRouter.get('/', sellers);

module.exports = sellerRouter;