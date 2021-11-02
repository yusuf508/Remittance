
const status = require('http-status');
const logger = require('../config/logger');
const {authService} =require('../services')
const {AppiResponses, AppiResponse} = require('../payload/AppiResponses');

exports.login =(req,res)=>{

let email = req.body.email;    
let password = req.body.password;  
console.log(email); 
let loginresponses =authService.login(email,password);


res.status(status.OK).send(new AppiResponse(400,'successfully',loginresponses));




}

exports.register =(req,res)=>{
    res.status(status.NOT_IMPLEMENTED)
    .send("registered");
    //res.send("this is the register");
}