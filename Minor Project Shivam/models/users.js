const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../db/connectDb');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'Client',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
