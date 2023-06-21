const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const getProductById = async (id) => {
  const products = await Product.findByPk(id);
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
};