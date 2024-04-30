const Sequelize = require('sequelize')
const database = require('../bin/database')
console.log(database.connection)

const sequelize = new Sequelize(database.connection.DB, database.connection.USER, database.connection.PASSWORD, {
    host: database.connection.HOST,
    dialect: database.connection.dialect,
    port: process.env.DB_PORT,

  });

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;