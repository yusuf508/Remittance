const status = require('http-status');
// const { data } = require('../config/logger');
const logger = require('../config/logger');
const { AppError } = require('../payload/AppError');
const { AppiResponse } = require('../payload/AppiResponses');
const db = require('../config/database');
const userService = require ('./../services/user.service');
const { handleAsync } = require('../utils/util');



const getALLusers = handleAsync (async (req, res)=>{
  let users = await userService.getALLuser();
  console.log(users);
   res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
  //  console.log(resp);

})

//getUserByEmailAndPassword
const getuserByEmail =  async (req, res)=>{

  let user = await userService.getUserByEmailAndPassword(email,password);
  // return user;
  res.status(status.OK).send(new AppiResponse(status.OK, 'user Found', user));

}

const getsingleUser = async (req, res)=>{

    let mail = req.body;
   let  resp = userService.getone(mail);
  // return res.status(status.OK).send(resp);
  return res.status(status.OK).send(new AppiResponse(status.OK, 'User  data Found', resp))

}

const create = handleAsync(async(req, res) => {
  logger.info(" calling create new user");

   let user = req.body;

  //  let  data = req.body;
   let  result = await userService.isEmailExist(user.email)
   if(result) {
   let  result = await userService.createUser(user)
   return res.status(status.OK).send(new AppiResponse(status.OK, 'Created Successfully', result))
   }



        })



//end of create user 


const updateUsers = handleAsync( async(req, res) => {
   logger.info(" updating  user");

 let user = req.body;
//  let  result = await userService.isEmailExist(user.email)
//  if(result) {
  let users = await userService.updateUser(user);
console.log(users);
  
  if(users){
  return  res.status(status.OK).send(new AppiResponse(status.OK, 'Data updated', users));
   }
    return  res.status(status.OK).send(new AppError(status.OK, 'invalid input'));



            });  
  const deleteUser = handleAsync( async (req,res) =>{


 logger.info(" deleting  user");

 let user = req.body;
  let users = await userService.deleteUsr(user.userid);
console.log(users);
  
  if(users){
  return  res.status(status.OK).send(new AppiResponse(status.OK, 'Data deleted', users));
   }
    return  res.status(status.OK).send(new AppError(status.OK, 'invalid input'));
            });
    


            // const getALLCountries = handleAsync (async (req, res)=>{
            //   let users = await userService.getALLCountries();
            //    res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
            //   //  console.log(resp);
            
            // })
            



module.exports ={
    getALLusers,
    getsingleUser,
    create,
    updateUsers,
    deleteUser,
    getuserByEmail,
 
}




// exports.create =(req,res)=>{
//     res.send("user created");
// }
// exports.update =(req,res)=>{
//     res.send("user updated");
// }