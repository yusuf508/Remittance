const Joi = require('joi');

const createUser = Joi.object({
firstName : Joi.string().required(),
LastName : Joi.string().required(),
email :Joi.string().required().email(),
password: Joi.string().required(),
age: Joi.number().required().min(13).max(100),
});




const updateUser = Joi.object({
    firstName : Joi.string().required(),
    LastName : Joi.string().required(),
    
    age: Joi.number().min(13).max(100),
});

module.exports = {
    createUser,
    updateUser
}