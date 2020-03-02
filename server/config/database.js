const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DB_NAME, null, null, {
  dialect: 'sqlite'
});

module.exports = database;
