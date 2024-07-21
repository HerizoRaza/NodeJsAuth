require('dotenv').config
const { Pool } = require('pg');

connection = {
    HOST: process.env.POSTGRES_HOST || "localhost",
    USER: process.env.POSTGRES_USER || "postgres",
    PASSWORD: process.env.POSTGRES_PASSWORD || "pass123",
    DB: process.env.POSTGRES_DB || "authdb",
    dialect: process.env.DATABASE_TYPE || "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
const pool = new Pool ({
    host: process.env.DB_WRITE_HOST || 'localhost',
    PASSWORD: process.env.POSTGRES_PASSWORD || "pass123",
    USER: process.env.POSTGRES_USER || "postgres",
    DB: process.env.POSTGRES_DB || "authdb",
    port: process.env.POSTGRES_PORT || 3030,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

module.exports = {connection, pool}