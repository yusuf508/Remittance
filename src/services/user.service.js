const logger = require('../config/logger');
const {usermodel }= require('../modules');

const isEmailExist = (email) => {
    if(usermodel.isEmailExist(email)){
        return true;
        
    }
    return false;
}


const createUser = (user) => {
   logger.info("creating user ");

   let status = usermodel.create(user);



    return status;

}

const getALLuser = () =>{

    return usermodel.getUsers();
}


const getone = (email) =>{
    resp = usermodel.getUser(email);
    return resp;
}

// get update fucntion in the model by passing user as parameter 
const updateUser = (user) => {
    result = usermodel.update(user);
    return result;
}
const deleteUsr = (email) =>{
    result = usermodel.deleteuser(email);
    return result;
}





module.exports ={
    isEmailExist,
    createUser,
    getALLuser,
    getone,
    updateUser,
    deleteUsr
}