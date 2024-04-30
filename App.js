const express = require('express')
const app = express()
const config = require("./bin/Config")
const db = require('./models')

//****** start serveur ******/
app.listen(config.port, () => {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
})

db.sequelize.sync({alter: true}).then(() => {
    console.log('Sequelize traitement successfull')
})

module.exports = app