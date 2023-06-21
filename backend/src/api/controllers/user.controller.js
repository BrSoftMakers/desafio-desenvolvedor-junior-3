const md5 = require('md5');
const userService = require('../services/user.service');
const jwtConfig = require('../auth/jwtConfig');

const response = (user, token, status, method) => ({
  hasToken: true,
  method,
  status,
  message: token,
  result: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  },
});

const getUserById = async (req, res) => {
  const { id } = req.params;
  const hasUser = await userService.getUserById(id);
  if (!hasUser) {
    return res.status(404).json({
      hasToken: false,
      method: 'POST',
      status: 404,
      message: 'Usuário não encontrado',
    });
  }

  return res.status(200).json(response(hasUser, '', 200, 'POST'));
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const hasUser = await userService.getLogin(email, password);
  if (!hasUser) {
    return res.status(404).json({
      hasToken: false,
      method: 'POST',
      status: 404,
      message: 'Usuário não encontrado',
    });
  }
  const token = jwtConfig.createToken({ id: hasUser.id, email, role: hasUser.role });

  return res.status(200).json(response(hasUser, token, 200, 'POST'));
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const emailExists = await userService.getUser(email);

  if (emailExists) {
    return res.status(409).json({
      hasToken: false,
      method: 'POST',
      status: 409,
      message: 'User already registered',
    });
  }
  
  const newUser = await userService
  .createUser({ name, email, password: md5(password), role: role || 'customer' });

  const token = jwtConfig.createToken({ id: newUser.id, email, role: role || 'customer' });

  return res.status(201).json(response(newUser, token, 201, 'POST'));
};

const getSellers = async (_req, res) => {
  const sellers = await userService.getSellers('seller');

  return res.status(200).json(sellers);
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);

  return res.status(200).json();
};

module.exports = {
  getUserById,
  login,
  createUser,
  getSellers,
  getAllUsers,
  deleteUser,
};