const database = require('../bin/database')
console.log(database.connection)
const Sequelize = require('sequelize')

const sequelize = new Sequelize(database.connection.DB, database.connection.USER, database.connection.PASSWORD, {
    host: database.connection.HOST,
    dialect: database.connection.dialect,
    operatorsAliases: 0,
    pool: {
        max: database.connection.pool.max,
        min: database.connection.pool.min,
        acquire: database.connection.pool.acquire,
        idle: database.connection.pool.idle
    } 
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// variable call models
db.users = require("./user").users(sequelize, Sequelize)

module.exports = db;