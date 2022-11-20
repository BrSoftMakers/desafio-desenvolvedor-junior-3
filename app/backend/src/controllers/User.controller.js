const UserService = require('../services/User.service');

const UserController = {
  login: async (req, res) => {
    const user = await UserService.findUser(req.body);
    if (user.message) throw new Error(user.message);
    const token = UserService.generateToken(user);
    return res
      .status(200)
      .json({ id: user.id, name: user.name, email: user.email, token });
  },

  register: async (req, res) => {
    const user = await UserService.insert(req.body);
    const token = UserService.generateToken(user);
    return res
      .status(201)
      .json({ id: user.id, name: user.name, email: user.email, token });
  },
};

module.exports = UserController;
