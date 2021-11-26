const {ApiError} = require('./../payload/AppError');
const db = require('../config/database');
const { handleAsync } = require('../utils/util');

/*   
money Transfer Functions start here 

*/



const getCountries = async () => {
    return await db.executeQuerysingleparam(`select * from country`);

   //return users;
   }
 
   const getStates = async () => {
    return await db.executeQuerysingleparam(`select * from state`);

   //return users;
   }
   const getCity = async () => {
    return await db.executeQuerysingleparam(`select * from cities`);

   //return users;
   }
  // getcurrency

  const getcurrency = async () => {
    return await db.executeQuerysingleparam(`select * from currencies`);

   //return users;
   }
   const getCustomers = async () => {
    return await db.executeQuerysingleparam(`select * from customers`);

   //return users;
   }
   const getCustomerInfo = async () => {
    return await db.executeQuerysingleparam(`select c.customerid,c.customername,cr.countryname,s.statename,ct.cityname from customers c ,country cr, state s,
    cities ct where cr.countryid=c.country and ct.cityid=c.city and s.stateid=c.state `);

   //return users;
   }








module.exports = {
   
 getCountries ,
 getStates ,
 getCity ,
 getcurrency,
 getCustomers,
 getCustomerInfo
//  isEmailExist ,
//  create,
//  getUserByEmailAndPassword,
//  getUser ,
//  getUsers

}