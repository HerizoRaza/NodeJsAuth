const express = require('express')
const router = express.Router()

// import controller
const auth = require('../controllers/authController');
const { registerValidator, loginValidator } = require('../validation/auth');
const acces = require('../controllers/userConroller');
const roleacces = require('../midlleware/helper');

//const upload = require('../controllers/uploadImage')

//const user = require('../controllers/userConroller')

//router.route('/singin').post(validate(validationAuth.singinParam), singin.singin);


router.get('/test', auth.userTest)
router.post('/register' ,registerValidator, auth.register)
router.post('/login', loginValidator, auth.login)
router.get('/comptable',roleacces.verifyAuth,roleacces.verifyRole("comptable"), acces.comptable);
router.get('/admin',roleacces.verifyAuth,roleacces.verifyRole("admin"), acces.admin)
router.get('/chauffeur',roleacces.verifyAuth,roleacces.verifyRole("chauffeur"), acces.chauffeur)
router.get('/gestionnaire',roleacces.verifyAuth,roleacces.verifyRole("gestionnaire"), acces.gestionnaire)


/*router.get('/test', user.userTest)
router.post('/add', user.create)
router.get('/get-all', user.getAll)
router.put('/:id', user.update)
router.delete('/:id', user.destroy)
router.get('/stripe', mid.fnStripe)*/





/**
router.post('/upload-image/', uploads.single('data'), upload.uploadFiles)
router.post('/upload-file/', uploads.single('data'), upload.uploadFilesAll)
*/


module.exports = router