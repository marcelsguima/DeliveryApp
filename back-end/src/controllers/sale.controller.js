const saleService = require('../services/sale.service');

const registerSale = async(req, res) => {
    const { 
     userId,
     sellerId,
     totalPrice,
     deliveryAddress,
     deliveryNumber,
     saleDate, 
     products,
     } = req.body;

    const newSale = await saleService.registerSale(userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        products,
        )

    if (newSale) {
        return res.status(201).json(newSale)
    }

    res.status(500).json({ message: 'Um erro interno ocorreu'});
};

module.exports = { registerSale };