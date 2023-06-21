const productService = require('../services/product.service');

const getAllProducts = async (_req, res) => {
  const products = await productService.getAllProducts();

  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
