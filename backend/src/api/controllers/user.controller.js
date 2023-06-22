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
    token,
  },
});

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

  const token = jwtConfig.createToken({ id: hasUser.id, email, name: hasUser.name });

  return res.status(200).json(response(hasUser, token, 200, 'POST'));
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const emailExists = await userService.getUser(email);

  if (emailExists) {
    return res.status(409).json({
      hasToken: false,
      method: 'POST',
      status: 409,
      message: 'Usuário já registrado!',
    });
  }
  
  const newUser = await userService.createUser({ name, email, password: md5(password) });

  const token = jwtConfig.createToken({ id: newUser.id, email, name });

  return res.status(201).json(response(newUser, token, 201, 'POST'));
};

module.exports = {
  login,
  createUser,
};