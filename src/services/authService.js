
const jwt = require('jsonwebtoken');
const logger = require('../config/logger');
const {usermodel} =require('../modules');
const {AppError} = require('../payload/AppError');



const login = async (email, password) =>{
  logger.info(`Authentication on ${email} and ${password}`);
      
    console.log(email,password);

  let user = await usermodel.getUserByEmailAndPassword(email,password);
      console.log(user);
if (!user || user.length <= 0){

      throw new AppError(401,"email or pasword doeas not match");
   }
   
// return user;
console.log(user);
    var token = jwt.sign({userid:user.USERID, role:user.ROLENAME},process.env.JWT_SECRET_KEY, {expiresIn:'50s'});

      console.log(token);
   return {"accessToken":token,user};

    
}

// const login = async (email, password) => {

//   logger.info(`Authentication on email ${email} and password ${password} by using jwt`);
//    console.log(email,password);
//   let user = await usermodel.getUserByEmailAndPassword(email, password);
//   console.log(user);
//   if (!user || user.length <= 0) {
//       throw new AppError(401, "Email or password does not match");
//   }
//       console.log('THE USER IS:='+user);
//   let token = jwt.sign({userid:user.USERID, role:user.ROLENAME}, process.env.JWT_SECRET_KEY);
//   console.log(user.USERID)
//  // {userid:user[0].USERID, role:user[0].ROLENAME}
//   return {accessToken: token,user:user};
// }




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