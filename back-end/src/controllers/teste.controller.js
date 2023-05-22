const sellerService = require('../services/teste.service');

const sellers = async (_req, res, next) => {
  try {
    const result = await sellerService.sellers();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { sellers };