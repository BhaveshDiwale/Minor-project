const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../db/connectDb');

const Client = sequelize.define('Client', {
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  client_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dev_testimonial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Client;
