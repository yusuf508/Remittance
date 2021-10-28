const status = require("http-status");
const { AppError } = require("../payload/AppError");
const { AppiResponse } = require("../payload/AppiResponses");
const jwt = require('jsonwebtoken');



const auth = (req, res, next) => {

//heck the header

// let token = req.headers.accesstoken 
// console.log("The token is: "+token);

const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

if(!token){
    throw new AppError(401, 'please provide token');
}


let response =jwt.verify(token,process.env.JWT_SECRET_KEY );

if(response){
    next();
}

throw new AppError(401, 'verify a token please');

}


module.exports = 
{
    auth}
    