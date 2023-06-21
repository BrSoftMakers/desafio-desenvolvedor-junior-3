const { Sale, SalesProducts } = require('../../database/models');

const createSale = async (sale) => {
  const newSale = await Sale.create(sale);
  return newSale;
};

const createSaleProduct = async (product) => {
  const result = await SalesProducts.create(product);
  return result;
};

const getAllSales = async () => {
  const sales = await Sale.findAll();
  return sales;
};

const getSaleById = async (id) => {
  const order = await Sale.findByPk(id);
  return order;
};

const getSalesProductsById = async (saleId) => {
  const product = await SalesProducts.findAll({ where: { saleId } });
  return product;
};

const updateSale = async ({ id, status }) => {
  const sale = await Sale.update({ status }, { where: { id } });
  return sale;
};

module.exports = {
  createSaleProduct,
  createSale,
  getAllSales,
  getSaleById,
  getSalesProductsById,
  updateSale,
};