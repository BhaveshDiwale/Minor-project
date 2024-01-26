const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../../db/connectDb');
const Skill = require('./skills');
const Developer = require('../developers');

const DevSkill = sequelize.define(
  'DevSkill',
  {
    dev_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Developer,
        key: 'dev_id',
      },
    },
    skill_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Skill,
        key: 'skill_id',
      },
    },
  },
  { timestamps: false }
);

DevSkill.belongsTo(Developer, { foreignKey: 'dev_id', onDelete: 'CASCADE' });
DevSkill.belongsTo(Skill, { foreignKey: 'skill_id' });

module.exports = DevSkill;
