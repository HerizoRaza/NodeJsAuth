const express = require('express')
const app = express()
const config = require("./bin/Config")

//****** start serveur ******/
app.listen(config.port, () => {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
})

module.exports = app