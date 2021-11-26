const status = require('http-status');
const logger = require('../config/logger');
const {usermodel }= require('../modules');
const { AppError } = require('../payload/AppError');
const { handleAsync } = require('../utils/util');
const {Moneymodel }= require('../modules');

const getALLCountries = async () =>{

    // return usemrmodel.getCountries();
    return  await Moneymodel.getCountries();

}



const getState =  async () =>{

   // return usermodel.getStates();
   return  await Moneymodel.getStates();

}

const getCities = async () =>{

  //  return usermodel.getCity();
  return await Moneymodel.getCity();


}

const getCurrencies = async () =>{

  //  return usermodel.getcurrency();
  return await Moneymodel.getcurrency();


}
const getCustomer = async () =>{

  //  return usermodel.getcurrency();
  return await Moneymodel.getCustomers();


}

const getCustinfo = async () =>{

  //  return usermodel.getcurrency();
  return await Moneymodel.getCustomerInfo();


}


module.exports ={
    
    getALLCountries ,
    getState,
    getCities,
    getCurrencies,
    getCustomer,
    getCustinfo
}