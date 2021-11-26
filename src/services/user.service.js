const status = require('http-status');
const logger = require('../config/logger');
const {usermodel }= require('../modules');
const { AppError } = require('../payload/AppError');
const { handleAsync } = require('../utils/util');
// httpStatus = require('http-status');

const isEmailExist =async (email) => {
// let result = usermodel.isEmailExist(email)


let result = await usermodel.isEmailExist(email);
    if(result.length > 0){
        throw new AppError (401, 'This Email is exist Already')
    }
    return true

    // if(result.length >0){
    //     return  res.status(status.NOT_ACCEPTABLE).send(new AppError(status.NOT_ACCEPTABLE,"email already exists"))
        
    // }
    // return true;
}


const createUser = async (user) => {
   logger.info("creating user ");
    return await usermodel.create(user);
//    logger.info("Creating user ");
//    return userModel.create(user);



   // return status;

}

const getALLuser = async () =>{

    return  await usermodel.getUsers();
}


const getone = async (email) =>{
    resp =  usermodel.getUser(email);
    return await resp;
}
const getUserByEmailAndPassword = async (email,password) =>{
    // resp = usermodel.getUser(email);
    // return resp;
    return await usermodel.getUserByEmailAndPassword(email, password);
}

// get update fucntion in the model by passing user as parameter 
const updateUser = ( async (user) => {
    //result = usermodel.update(user);
    return await usermodel.update(user);
});


const deleteUsr = async (userid) =>{

let data  = await usermodel.deleteuser(userid);
console.log(data);
    return data;
    // result = usermodel.deleteuser(email);
    // return result;
}


// const getALLCountries = () =>{

//     return usermodel.getCountries();

// }








module.exports ={
    isEmailExist,
    createUser,
    getALLuser,
    getone,
    updateUser,
    deleteUsr,
    getUserByEmailAndPassword,
   
}