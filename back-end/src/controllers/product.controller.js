const productService = require('../services/product.service');

const getAllProducts = async (req, res) => {
    const product = await productService.getAllProducts();
    return res.status(200).json(product);
};

module.exports = { getAllProducts };
