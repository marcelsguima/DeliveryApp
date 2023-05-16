const { Sale, SalesProduct } = require('../database/models');

const registerSale = async (totalPrice, deliveryAddress,
    deliveryNumber, saleDate) => {
    const sale = await Sale.create({
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    });
    return sale;
};

module.exports = {registerSale};