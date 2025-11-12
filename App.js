const express = require('express')
const app = express()
const config = require("./bin/Config")
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const logger = require('morgan')
const { errorParsor } = require('./midlleware/error-parser')
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./bin/database");

connectDB();
require('./models/user');


// cors & options
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

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

module.exports = app