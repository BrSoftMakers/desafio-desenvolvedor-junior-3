const UserService = require('../services/User.service');

const UserController = {
  login: async (req, res) => {
    const user = await UserService.findUser(req.body);
    if (user.message) throw new Error(user.message);
    const token = UserService.generateToken(user);
    return res.status(200).json({ token });
  },

};

module.exports = UserController;
