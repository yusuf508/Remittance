const status = require('http-status');
const { data } = require('../config/logger');
const logger = require('../config/logger');
const { AppError } = require('../payload/AppError');
const { AppiResponse } = require('../payload/AppiResponses');
const {userService} = require('../services');




const getALLusers = (req, res)=>{

   let usres = userService.getALLuser();
   res.status(status.OK).send(new AppiResponse(status.OK, 'got it' , usres))

}


const userByemail = (req, res)=>{

    let mail = req.body;
    resp = userService.getone(mail.email);
   return res.status(status.OK).send(resp);

}

const create = (req, res) => {
  logger.info(" calling create new user");

   let user = req.body;
if(userService.isEmailExist(user.email)){

  return  res.status(status.NOT_ACCEPTABLE).send(new AppError(status.NOT_ACCEPTABLE,"user already exists"))

  
}
        let usercreateStatus = userService.createUser(user);
      
        if(usercreateStatus){
            return res.status(status.OK).send({message: "new user seccessfully created!"});

        }
        return res.status(status.INTERNAL_SERVER_ERROR).send({message:"invalid input"});


        }



//end of create user 


const updateUser = (req, res) => {
    let user = req.body;
    if(!userService.isEmailExist(user.email)){
    
      return  res.status(status.NOT_ACCEPTABLE).send(new AppError(status.NOT_ACCEPTABLE,"user does not  exists"))
   
      
    }
 let userupdateStatus = userService.updateUser(user);
          
 if(userupdateStatus){
                return res.status(status.OK).send(new AppiResponse(status.OK,"updating",usres));
    
            }
            return res.status(status.INTERNAL_SERVER_ERROR).send(new AppError(status.NOT_ACCEPTABLE,"user does not updated"));
    
    
            }
            const deleteUser = (req,res) =>{ 
                 user = req.body;
                 console.log(user);
                if (!userService.isEmailExist(user.email)){
            
                  return  res.status(status.NOT_ACCEPTABLE).send('This email does not exist')
                }
            
                result = userService.deleteUsr(user)
                if (result){
                    return res.status(status.OK).send("deleted Successfully")
                }
            }
    
    



module.exports ={
    getALLusers,
    userByemail,
    create,
    updateUser,
    deleteUser
}




// exports.create =(req,res)=>{
//     res.send("user created");
// }
// exports.update =(req,res)=>{
//     res.send("user updated");
// }