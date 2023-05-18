const saleService = require('../services/sale.service');
const { Sale } = require('../database/models');

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

     const saleDateFormatted = new Date(saleDate);

  if (isNaN(saleDateFormatted.getTime())) {
    return res.status(400).json({ message: 'Data de venda inválida' });
  }

    const newSale = await saleService.registerSale(userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDateFormatted,
        products,
        )

    if (newSale) {
        return res.status(201).json(newSale)
    }

    res.status(500).json({ message: 'Um erro interno ocorreu'});
};

const getSaleById = async (req, res) => {
    const { id } = req.params;

    try {
        const sale = await Sale.findByPk(id);
        
        if (sale) {
          return res.status(200).json(sale);
        } else {
          return res.status(404).json({ message: 'Venda não encontrada' });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
      }
};

module.exports = { 
    registerSale,
    getSaleById,
 };