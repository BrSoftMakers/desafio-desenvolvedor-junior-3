const errors = require('./errors');

function errorMiddleware(error, _req, res, _next) {
  if (errors[error.message]) {
    const { status, message } = errors[error.message];

    return res.status(status).json({ message });
  }

  return res.status(500).json({ message: error.message });
}

module.exports = errorMiddleware;
