const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../../db/connectDb');
const Skill = require('./skills');
const Project = require('../project');

const ProjectSkill = sequelize.define(
  'ProjectSkill',
  {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Project,
        key: 'project_id',
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

ProjectSkill.belongsTo(Project, { foreignKey: 'project_id' });
ProjectSkill.belongsTo(Skill, { foreignKey: 'skill_id' });

module.exports = ProjectSkill;
