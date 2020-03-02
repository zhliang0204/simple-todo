const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./../config/database');
const uuid = require('uuid/v4');

const Todo = sequelize.define(
  'Todo',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: () => uuid()
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
    freezeTableName: true
  }
);

module.exports = Todo;
