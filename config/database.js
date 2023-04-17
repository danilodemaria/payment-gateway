require('dotenv').config();

module.exports = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: process.env.DATABASE_DIALECT,
  logging: false,
  seederStorage: 'sequelize',
  dialectOptions: {
    decimalNumbers: true,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  redis: {
    password: process.env.PASSWORD_REDIS,
    host: process.env.REDIS_HOST,
  },
  secure: 'SECURE',
};
