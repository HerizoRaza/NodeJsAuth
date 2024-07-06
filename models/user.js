'use strict'

const users = (sequelize , Sequelize) => {
    return sequelize.define('users', {
        username: Sequelize.STRING(50),
        firstname: Sequelize.STRING(50),
        lastname: Sequelize.STRING(50),
        email: Sequelize.STRING(50),
        password: Sequelize.STRING(50),
        role: {
            type: Sequelize.ENUM,
            values: ['ADMIN', 'CLIENT'],
            defaultValue: 'CLIENT'
        },    
        phone: Sequelize.STRING,

    }, { freezeTableName: true });
}
module.exports = { users };