const express = require('express');
const userRouter = require('../router/user.route');
const loginRouter = require('../router/login.route');
const registerRouter = require('../router/register.route');
const productRouter = require('../router/product.route');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);

module.exports = app;
