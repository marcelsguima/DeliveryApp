const express = require('express');
const userRouter = require('./router/user.route');
const loginRouter = require('./router/login.route');

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/login', loginRouter);

module.exports = app;
