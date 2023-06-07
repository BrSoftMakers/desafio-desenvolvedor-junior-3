require('dotenv').config();

const environment = "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: 'localhost',
  port: '3306',
  database: `${'blog-Soft-Makers'}${suffix[environment] || suffix.test}`,
  username: 'root',
  password: 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};