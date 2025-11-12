const express = require('express')
const router = express.Router()
//const verifyAuth = require('../midlleware/helper')

// import controller
const auth = require('../controllers/authController')

//const upload = require('../controllers/uploadImage')

//const user = require('../controllers/userConroller')

//router.route('/singin').post(validate(validationAuth.singinParam), singin.singin);


router.get('/test', auth.userTest)
router.post('/register' , auth.register)
router.post('/login', auth.login)



/**
router.post('/upload-image/', uploads.single('data'), upload.uploadFiles)
router.post('/upload-file/', uploads.single('data'), upload.uploadFilesAll)
*/


module.exports = router