const express = require('express')
const router = express.Router()

const user = require('../controllers/userConroller')

router.get('/test', user.userTest)
router.post('/add', user.addUser)