const { Sale, SalesProduct } = require('../database/models');

const registerSale = async (userId, sellerId, totalPrice, deliveryAddress,
    deliveryNumber, saleDate, products) => {
    const sale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    });

    for (const product of products) {
        await SalesProduct.create({
          saleId: sale.id,
          productId: product.id,
          quantity: product.quantity,
        });
      }
      
    return sale;
};

module.exports = {registerSale};