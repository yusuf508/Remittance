
const jwt = require('jsonwebtoken');
const logger = require('../config/logger');
const {usermodel} =require('../modules');
const {AppError} = require('../payload/AppError');



const login = (email, password) =>{
  logger.info(`Authentication on ${email} and ${password}`);

  let user = usermodel.getUserByemailAndPassword(email, password);
console.log(user.length);
  if(user.length <=0){

      throw new AppError(401,"email or pasword doeas not match");
   }
   
// return user;

    var token = jwt.sign({user},process.env.JWT_SECRET_KEY, {expiresIn:'30s'});


   return {"accessToken":token};

    
}


module.exports ={
    login
}