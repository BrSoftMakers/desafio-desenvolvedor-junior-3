const md5 = require('md5');
const { User } = require('../../database/models');

const getLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password: md5(password) } });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

const getSellers = async (role) => {
  const sellers = await User.findAll({ where: { role } });
  return sellers;
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });
  return user;
};

module.exports = {
  getLogin,
  getUser,
  createUser,
  getSellers,
  getUserById,
  getAllUsers,
  deleteUser,
};