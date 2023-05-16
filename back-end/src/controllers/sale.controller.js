const saleService = require('../services/sale.service');

const registerSale = async(req, res) => {
    const { 
     totalPrice,
     deliveryAddress,
     deliveryNumber,
     saleDate, 
     } = req.body;

    const data = { totalPrice, deliveryAddress, deliveryNumber, saleDate};

    const newSale = await saleService.registerSale(data)

    if (newSale) {
        return res.status(201).json(newSale)
    }

    res.status(500).json({ message: 'Um erro interno ocorreu'});
};

module.exports = { registerSale };