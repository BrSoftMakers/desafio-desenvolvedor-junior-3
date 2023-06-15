const jtw = require('jsonwebtoken');

const generateToken = (id) => {
  return jtw.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
    algorithm: 'HS256',
  });
}
