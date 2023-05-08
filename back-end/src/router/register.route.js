const express = require('express');
const { registerUser } = require('../controllers/userController');

const registerRouter = express.Router();

registerRouter.post('/', registerUser);

module.exports = registerRouter;
