require('dotenv').config

connection = {
    HOST: process.env.POSTGRES_HOST || "localhost",
    USER: process.env.POSTGRES_USER || "postgres",
    PASSWORD: process.env.POSTGRES_PASSWORD || "pass123",
    DB: process.env.POSTGRES_DB || "postgres",
    dialect: process.env.DATABASE_TYPE || "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}

module.exports = {connection}