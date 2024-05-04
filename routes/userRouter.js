const express = require('express')
const router = express.Router()

const user = require('../controllers/userConroller')

router.get('/test', user.userTest)
router.post('/add', user.addUser)
//router.get('/get-all', user.getAll)
//router.put('/:id', user.update)
//router.delete('/:id', user.destroy)

module.exports = router