const express = require('express')
const router = express.Router()

// import controller
const auth = require('../controllers/authController')
const authenticate = require('../midlleware/authenticate')
//const authorize = require('../midlleware/authorize')
//const user = require('../controllers/userConroller')

//router.route('/singin').post(validate(validationAuth.singinParam), singin.singin);

router.get('/test', authenticate , (req, res) => {
    res.status(200).json({ message: 'Protected route accessed' });
});
router.post('/register', authenticate, auth.register)
//router.post('/addUser', user.addUser)
//router.get('/getAll', user.getAll)
//router.put('/:id', user.update)
//router.delete('/:id', user.destroy)

module.exports = router