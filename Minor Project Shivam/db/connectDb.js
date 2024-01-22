const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  { host: process.env.DATABASE_HOST, dialect: 'mysql' }
);

module.exports = sequelize;
