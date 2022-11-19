require('dotenv/config');

const settings = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'MyBlog',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
};

const config = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};

module.exports = config;
