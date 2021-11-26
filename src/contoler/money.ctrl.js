const status = require('http-status');
// const { data } = require('../config/logger');
const logger = require('../config/logger');
const { AppError } = require('../payload/AppError');
const { AppiResponse } = require('../payload/AppiResponses');
const db = require('../config/database');
const userService = require ('./../services/user.service');
const { handleAsync } = require('../utils/util');
const moneyService = require('../services/money.service');




            const getALLCountries = handleAsync (async (req, res)=>{
              let users = await moneyService.getALLCountries();
               res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
              //  console.log(resp);
            
            });

            const getState = handleAsync (async (req, res)=>{
                let users = await moneyService.getState();
                 res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
                //  console.log(resp);
              
              });
              const getCity  = handleAsync (async (req, res)=>{
                let users = await moneyService.getCities();
                 res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
                //  console.log(resp);
              
              });
              const getCurrency  = handleAsync (async (req, res)=>{
                let users = await moneyService.getCurrencies();
                 res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
                //  console.log(resp);
              
              });
              const getAllcustomers  = handleAsync (async (req, res)=>{
                let users = await moneyService.getCustomer();
                 res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
                //  console.log(resp);
              
              });

              const getcustomersinfo  = handleAsync (async (req, res)=>{
                let users = await moneyService.getCustinfo();
                 res.status(status.OK).send(new AppiResponse(status.OK, 'Data Found', users));
                //  console.log(resp);
              
              });
              
            //   getCurrency



module.exports ={
    
   getALLCountries ,
   getState,
   getCity,
   getCurrency,
   getAllcustomers,
   getcustomersinfo 
   
}



