const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../db/connectDb');
const Developer = require('./developers');
const Client = require('./client');

const Project = sequelize.define('Project', {
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  project_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wage: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Client,
      key: 'client_id',
    },
  },
  dev_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Developer,
      key: 'dev_id',
    },
  },
});

Project.belongsTo(Developer, { foreignKey: 'dev_id', onDelete: 'SET NULL' });
Project.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = Project;
