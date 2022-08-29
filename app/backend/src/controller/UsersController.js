const { JWT } = require('../authentication/authJWT');
const UserService = require('../services/UserService');

const UserController = {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await UserService.login(email, password);
    if (!user) return res.status(400).json({ message: 'Invald fields' });
    const token = JWT(user);
    res.status(200).json({ token })
  },

  async insertUser(req, res) {
    const { email, password } = req.body;
    const user = await UserService.insertUser(email, password);
    const token = JWT(user);
    res.status(201).json({ token });
  }
}

module.exports = UserController;