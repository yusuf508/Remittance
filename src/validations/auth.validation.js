const Joi = require('Joi');

const login = Joi.object({
    email : Joi.string().required(),
    password: Joi.string().required(),
    
});

const register = Joi.object({
    email : Joi.string().required(),
    password: Joi.string(),
      age : Joi.number().max(123).min(3),
    
});




module.exports = {
    login,
    register
}