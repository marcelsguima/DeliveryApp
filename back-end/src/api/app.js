const express = require('express');
// olá
const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
