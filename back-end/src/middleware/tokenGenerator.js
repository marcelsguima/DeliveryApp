const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const JWT_SECRET = path.resolve(__dirname, '../../jwt.evaluation.key');

const secret = fs.readFileSync(JWT_SECRET, 'utf8');
console.log(secret);

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const generateToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);
const verifyToken = (token) => jwt.verify(token, secret);
module.exports = {
    generateToken,
    verifyToken,
};