require('dotenv').config();

config = {
    baseUrl: process.env.APP_ENDPOINT || 'http://localhost:3030/',
    env: process.env.NODE_ENV,
    debug: process.env.DEBUG ? process.env.DEBUG == 'true' : true,
    port: process.env.SERVER_PORT || 3030,
    jwtSecret: process.env.JWT_SECRET || "itsverysecret",
    jwtExpire: parseInt(process.env.JWT_EXPIRE, 10) || 3600,
    
}

module.exports = config;