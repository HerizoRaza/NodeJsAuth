const express = require('express')
const router = express.Router()

const authenticate = require('../midlleware/authenticate');
const user = require('../controllers/userConroller')

router.get('/test', user.userTest)
router.post('/add', authenticate, user.addUser)
router.get('/getAll', user.getAll)
//router.put('/:id', user.update)
//router.delete('/:id', user.destroy)

module.exports = router