const express = require('express');
const router = express.Router();
const {authcontroler } = require('../../contoler');
const {loginvalidation } = require('../../validations');

const validate = require('../../midleware/validator');



// const authcontroler = require('../../contoler/auth.ctrl')
// const loginvalidation = require('../../validations/auth.validation');




router.post('/login',validate(loginvalidation.login) , authcontroler.login);

router.post('/register',validate(loginvalidation.register), authcontroler.register);




module.exports =router;