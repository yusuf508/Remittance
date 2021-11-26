const express =require('express');
const router = express.Router();
const {uservalidator } = require('../../validations');
const validate = require('../../midleware/validator');
const accessToken = require('../../midleware/auth');
const moneyControler = require('../../contoler/money.ctrl');


// accessToken.auth,


//router.post('/updateUser',accessToken.auth,validate(uservalidator.updateUser), accessToken.authentication('updateUser'),usercontroler.updateUsers)
router.get('/getCountries',accessToken.auth, moneyControler.getALLCountries );
router.get('/getState', moneyControler.getState);
router.get('/getCity', moneyControler.getCity);
router.get('/getCurrency', moneyControler.getCurrency);
router.get('/getCustomers', moneyControler.getAllcustomers);
router.get('/getCustomersinfo', moneyControler.getcustomersinfo);
 
 


module.exports = router;
    
