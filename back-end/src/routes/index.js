const { Router } = require('express');
const registerRoutes = require('./registerRoutes');

const routes = Router();

routes.use(registerRoutes);

module.exports = routes;
