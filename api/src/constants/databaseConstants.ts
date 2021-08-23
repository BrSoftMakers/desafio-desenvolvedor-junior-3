import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConstants = {
  db_port: parseInt(process.env.DATABASE_PORT),
  db_username: process.env.DATABASE_USERNAME,
  db_password: process.env.DATABASE_PASSWORD,
};
