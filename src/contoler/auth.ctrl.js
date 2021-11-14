
const status = require('http-status');
const logger = require('../config/logger');
const {authService} =require('../services')
const { AppiResponse} = require('../payload/AppiResponses');
const { AppError } = require('../payload/AppError');
const { handleAsync } = require('../utils/util');

exports.login = handleAsync( async (req,res)=>{

let email = req.body.email;    
let password = req.body.password;  
console.log(email); 
let loginresponses =  await authService.login(email,password);

//let message = res._('loginSuccess',email);

res.status(status.OK).send(new AppiResponse(status.OK,"message",loginresponses));




});

exports.register = async (req,res)=>{

    let user = req.body;
    let {result, err} = await authService.register(user);

    if (err){
        return res.status(status.INTERNAL_SERVER_ERROR)
            .send(new AppError(status.INTERNAL_SERVER_ERROR, err));
    }
    res.status(status.OK).send(new AppiResponse(status.OK,"registered",result));

    // res.status(status.NOT_IMPLEMENTED)
    // .send("registered");
    //res.send("this is the register");
}