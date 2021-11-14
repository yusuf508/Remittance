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
   res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
  //  console.log(resp);

})

//getUserByEmailAndPassword
const getuserByEmail =  async (req, res)=>{

  let user = await userService.getUserByEmailAndPassword(email,password);
  // return user;
  res.status(status.OK).send(new AppiResponse(status.OK, 'user Found', user));

}

const getsingleUser = (req, res)=>{

    let mail = req.body;
    resp = userService.getone(mail.email);
   return res.status(status.OK).send(resp);

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


// if(userService.isEmailExist(user.email)){

//   return  res.status(status.NOT_ACCEPTABLE).send(new AppError(status.NOT_ACCEPTABLE,"user already exists"))

  
// }
        // let usercreateStatus = await userService.createUser(user);
      
        // if(usercreateStatus){
        //     return res.status(status.OK).send({message: "new user seccessfully created!"});

        // }
        // return res.status(status.INTERNAL_SERVER_ERROR).send({message:"invalid input"});


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


//     let user = req.body;
//     if(!userService.isEmailExist(user.email)){
    
//       return  res.status(status.NOT_ACCEPTABLE).send(new AppError(status.NOT_ACCEPTABLE,"user does not  exists"))
   
      
//     }
//  let userupdateStatus = userService.updateUser(user);
          
//  if(userupdateStatus){
//                 return res.status(status.OK).send(new AppiResponse(status.OK,"updating",usres));
    
//             }
//             return res.status(status.INTERNAL_SERVER_ERROR).send(new AppError(status.NOT_ACCEPTABLE,"user does not updated"));
    
    
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


                //  user = req.body;
                //  console.log(user);
                // if (!userService.isEmailExist(user.email)){
            
                //   return  res.status(status.NOT_ACCEPTABLE).send('This email does not exist')
                // }
            
                // result = userService.deleteUsr(user)
                // if (result){
                //     return res.status(status.OK).send("deleted Successfully")
                // }
            });
    



module.exports ={
    getALLusers,
    getsingleUser,
    create,
    updateUsers,
    deleteUser,
    getuserByEmail
}




// exports.create =(req,res)=>{
//     res.send("user created");
// }
// exports.update =(req,res)=>{
//     res.send("user updated");
// }