'use strict'
const { pool } = require('../bin/database');
// User object constructor
const User = (data) => {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.created_at = new Date();
    this.updated_at = new Date();
}

const findById = function createUser(userId, result) {

    // For pool initialization, see above
    const connection = pool.getConnection(function (err, conn) {
        conn.query("Select * from users where id = ?", userId, function (err, res) {
            if (err) {
                // Don't forget to release the connection when finished!
                pool.releaseConnection(conn);
                console.log("error: ", err);
                result(err, null);
            } else {
                // Don't forget to release the connection when finished!
                pool.releaseConnection(conn);
                result(null, res[0]);
            }
        });
    })
    cosole.log(connection)
};

const Users = (sequelize , Sequelize) => {

   const users =  sequelize.define('users', {
        username: Sequelize.STRING(100),
        firstname: Sequelize.STRING(100),
        lastname: Sequelize.STRING(100),
        email:{
            type: Sequelize.STRING(100),
            require:true,
            lowercase: true,
            unique: true
        },        
        password: Sequelize.STRING(100),
        role: {
            type: Sequelize.ENUM,
            values: ['ADMIN', 'AGENT','STAGIARE'],
            defaultValue: 'AGENT'
        },    
        phone: Sequelize.STRING(100),
        createdAt: Sequelize.STRING(100),
        updatedAt: Sequelize.STRING(100)

    }, { freezeTableName: true });
    return users;
}
module.exports = { Users, User, findById };