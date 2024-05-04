const express = require('express')
const app = express()
const config = require("./bin/Config")
const db = require('./models')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const { errorParsor } = require('./midlleware/error-parser')
const { pathLogger } = require('./midlleware/path-logger')

// cors & options
var corsOptions = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }

// type data REST
app.use(logger('dev'))
app.use(express.json({ type: 'application/json' }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/*** Routes global ****/
const routes = require('./routes')
app.use('/', routes)

/** paht logger => party debug **/
/*if(config.debug){
    app.use(pathLogger)
}*/
/** catch 404 and  forward to error handler **/ 
app.use((res,req,next) =>{ 
  req.setHeader('Access-Control-Allow-Origin', '*')
  req.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  req.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  req.setHeader('Access-Control-Allow-Credentials', '*')
  next()
})

// cors & options
var corsOptions = {
  origin: '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

// middleware errorParser
app.use(errorParsor)

//****** start serveur ******/
app.listen(config.port, () => {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
})

db.sequelize.sync({alter: true}).then(() => {
    console.log('Sequelize traitement successfull')
})

module.exports = app