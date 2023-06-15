const Service = require('../services/users.services');

const createUser = async (_req, res) => {
  try {
    const { displayName, email, password } = _req.body;
    const user = await Service.createUserService({ displayName, email, password });
    if (user.status) return res.status(user.status).json({ message: user.message });

    return res.status(201).json(user);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Erro interno' });
  }
}

const authenticateUser = async (_req, res) => {
  const { email, password } = _req.body;
  const user = await Service.authenticateUserService({ email, password });

  if (user.status) return res.status(user.status).json({ message: user.message });

  const token = generateToken({ email });

  return res.status(200).json({ token });
};

module.exports = {
  createUser,
};
