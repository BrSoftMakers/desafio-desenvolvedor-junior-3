const { Router } = require('express');
const productController = require('../controllers/product.controller');

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);

module.exports = {
  productRouter,
};
