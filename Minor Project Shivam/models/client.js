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
  qualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  institute_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience_year: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

module.exports = Client;
