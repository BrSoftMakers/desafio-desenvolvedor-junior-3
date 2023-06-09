const usersService = require('../services/usersService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const newLogin = await usersService.login(email, password);
  if (newLogin.type) return res.status(404).json({ message: newLogin.message });
  res.status(200).send(newLogin);
};

const register = async (req, res) => {
  const { body } = req;
  const newUser = await usersService.register(body);
  if (newUser.type) return res.status(409).json({ message: newUser.message });
  res.status(201).send(newUser);
};

module.exports = {
  register,
  login
};