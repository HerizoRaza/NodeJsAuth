'use strict'

const users = (sequelize, DataType) => {
    return sequelize.define('users', {
        email: DataType.STRING,
        password: DataType.STRING,
        username: DataType.STRING,
        firstname: DataType.STRING,
        lastname: DataType.STRING
    }, { freezeTableName: true })
}

module.exports = { users }