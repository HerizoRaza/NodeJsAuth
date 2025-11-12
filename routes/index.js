const express = require('express')
const router = express.Router()

const privateRouter = require('./private');
//const publicRouter = require('./public');

//const imageRouter = require('./upload')

// router by element => middleware
router.use('/', privateRouter) // http://localhost:3030/
//router.use('/', publicRouter)
//router.use('/upload', imageRouter)

module.exports = router