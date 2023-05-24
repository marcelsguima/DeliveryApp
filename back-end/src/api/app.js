const express = require('express');
const userRouter = require('../router/user.route');
const loginRouter = require('../router/login.route');
const registerRouter = require('../router/register.route');
const productRouter = require('../router/product.route');
const saleRouter = require('../router/sale.route')
const sellerRouter = require('../router/teste.route');

const app = express();

app.use(express.static('public'));
app.use(express.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use('/sellers', sellerRouter);
app.use('/', saleRouter);


module.exports = app;
