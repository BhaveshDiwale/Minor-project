const { Sequelize, DataTypes } = require('sequelize');
const User = require('./users');
const sequelize = require('../db/connectDb');

const Reviews = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  review_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  review_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

Reviews.belongsTo(User, { foreignKey: 'userId' });

module.exports = Reviews;
