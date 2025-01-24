const express = require('express')
const router = express.Router()

// import controller
const auth = require('../controllers/authController')

//const upload = require('../controllers/uploadImage')

//const user = require('../controllers/userConroller')

//router.route('/singin').post(validate(validationAuth.singinParam), singin.singin);


router.get('/test',auth.userTest)
router.post('/register',auth.register)
router.post('/login', auth.loginUser)
router.get('/getuser', auth.getUserAll)



/**
router.post('/upload-image/', uploads.single('data'), upload.uploadFiles)
router.post('/upload-file/', uploads.single('data'), upload.uploadFilesAll)
*/


module.exports = router