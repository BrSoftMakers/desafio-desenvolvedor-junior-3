const UserService = require('../services/UserService');
const reg = new RegExp(/^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i);

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields' })
  }
  next();
}

const validateCreateUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!reg.test(email)) {
    return res.status(400).json({ message: '"Email" is invalid' });
  }
  if (password.length < 8 || password.length > 20) {
    return res.status(400).json({ message: '"Password" is invalid' });
  }
  const existEmail = await UserService.exist(email);
  existEmail && res.status(400).json({ message: 'User exist' });
  next();
}

module.exports = {
  validateLogin,
  validateCreateUser,
}