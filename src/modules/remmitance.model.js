const db = require('../config/database');

// const database = require('../config/Database')


const getCustomers = async () =>{
    let query = `select c.customerid,customername,co.countryid,countryname from customers c,country co,currencies cu where 
    c.country = co.countryid and co.countryid = cu.countryid`
    console.log(query);
    return  await db.executeQuerysingleparam(query);
    
}

const getCustomer = async (id,type) =>{
    let query =''
    if (type == 'equal'){
     query = `select c.customerid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currencies cu where 
    c.country = co.countryid and co.countryid = cu.countryid and c.customerid = ${id}`
    }
    else{
     query = `select c.customerid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currencies cu where 
    c.country = co.countryid and co.countryid = cu.countryid and c.customerid != ${id}`
    }
    return  await db.executeQuerysingleparam(query);
}



const createRamittance  = async (user) =>{

 //   console.log("create remmitance",user);
}

module.exports = {
    createRamittance,
    getCustomers,
    getCustomer
}