const express =require('express');
const router = express.Router();
const {usercontroler } = require('../../contoler');
const {uservalidator } = require('../../validations');
const validate = require('../../midleware/validator');
const accessToken = require('../../midleware/auth');

router.get('/',accessToken.auth, usercontroler.getALLusers);
router.post('/userById',usercontroler.userByemail);
router.post('/create',validate(uservalidator.createUser),usercontroler.create);
router.post('/updateUser',validate(uservalidator.updateUser),usercontroler.updateUser);
router.post('/delete',usercontroler.deleteUser);
 
 


module.exports = router;
    
