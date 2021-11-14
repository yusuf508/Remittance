const Joi = require('joi');

const createUser = Joi.object({
userid : Joi.number().required(),
email :Joi.string().required().email(),
password: Joi.string().required(),
fullName: Joi.string().required(),
active : Joi.number().required()
//age: Joi.number().required().min(13).max(100),
});


const updateUser = Joi.object({
//  userid = user.userid;
// let email = user.email;
// let password = user.password;
// let fullName = user.fullName;
// let active = 0;
userid : Joi.number().required(),
    email : Joi.string().required().email(),
    password : Joi.number().required(),
    fullName: Joi.string().required(),
    active: Joi.number().required(),
});

module.exports = {
    createUser,
    updateUser
}