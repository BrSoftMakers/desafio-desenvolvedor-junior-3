require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  ssl: { rejectUnauthorized: false },
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  },
});

module.exports = knex;
