const express = require('express')
const router = express.Router()

const userRouter = require('./userRouter')

//const imageRouter = require('./upload')

// router by element => middleware
router.use('/user', userRouter) // http://localhost:3000/user/
//router.use('/upload', imageRouter)

module.exports = router