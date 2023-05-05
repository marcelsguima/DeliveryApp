const Joi = require('joi');
const jwt = require('jsonwebtoken');

const registerUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const secret = process.env.JWT_SECRET || 'valor padrão';

const tokenValidation = (req, res, next) => {
  try {
    const authorization = req.header('Authorization');
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
}; 
