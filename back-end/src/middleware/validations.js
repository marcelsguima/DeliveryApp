const Joi = require('joi');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const registerUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const createRegister = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const JWT_SECRET = path.resolve(__dirname, '../../jwt.evaluation.key');
// const secret = process.env.JWT_SECRET || 'valor padrão';
const secret = fs.readFileSync(JWT_SECRET, 'utf8').trim();

const tokenValidation = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const { data } = jwt.verify(authorization, secret);
    req.payload = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = { 
  registerUserSchema,
  tokenValidation,
  createRegister,
}; 
