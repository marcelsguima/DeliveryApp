const express = require('express');
const userRouter = require('../router/user.route');
const loginRouter = require('../router/login.route');
const registerRouter = require('../router/register.route');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

module.exports = app;
