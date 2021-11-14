
const jwt = require('jsonwebtoken');
const logger = require('../config/logger');
const {usermodel} =require('../modules');
const {AppError} = require('../payload/AppError');



const login = async (email, password) =>{
  logger.info(`Authentication on ${email} and ${password}`);

  let user = await usermodel.getUserByEmailAndPassword(email,password);
console.log(user);
if (!user || user.length <= 0){

      throw new AppError(401,"email or pasword doeas not match");
   }
   
// return user;
  
    var token = jwt.sign({user},process.env.JWT_SECRET_KEY, {expiresIn:'50s'});

      console.log(token);
   return {"accessToken":token};

    
}
const register = async (user) => {
  let err = '';

  let result = await usermodel.create(user);
  if(!result)
    err = " something went wrong";

  return {result, err};

}
module.exports ={
    login,
    register
}