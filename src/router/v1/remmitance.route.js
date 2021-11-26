// const express = require('express');
// const router = express.Router();
// const {remittanceController} = require('../controller');
// router.get('/createRamittance', remittanceController.createRamittance);

// // router.get('/:userId', userController.getUserById); //userId validation


// module.exports = router;



let express = require('express');
let router = express.Router();
const remittanceController = require('../../controller/remittance.controller');

router.get('/getCustomers', remittanceController.getCustomers)
router.get('/getCustomer/:id/:type', remittanceController.getCustomer)
router.get('/createRemittance', remittanceController.createRamittance)

router.get('/test', remittanceController.test)

module.exports = router;
