const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
const { validateToken } = require('../middleware/login.validation');

const saleRouter = Router();

saleRouter.post('/', validateToken, saleController.createSale);

saleRouter.get('/', saleController.getAllSales);
saleRouter.get('/:id', validateToken, saleController.getSaleById);

saleRouter.put('/update/:id', validateToken, saleController.updateSale);

module.exports = {
  saleRouter,
};
