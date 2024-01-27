const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../db/connectDb');

const Developer = sequelize.define(
  'Developer',
  {
    dev_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    dev_name: {
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
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { timestamps: true }
);

module.exports = Developer;
