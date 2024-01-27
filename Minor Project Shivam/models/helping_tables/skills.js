const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../../db/connectDb');

const Skill = sequelize.define(
  'Skill',
  {
    skill_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    skill_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Skill;
