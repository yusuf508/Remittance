// const ramittanceModel = require('../model');

// const createRamittance = async (user) => {

// }



// module.exports = {
//     createRamittance
// }



const remittanceModel = require('../modules/remmitance.model')

const getCustomers = async () =>{
    let resp = await remittanceModel.getCustomers()
    return resp;
}
const getCustomer = async (id,type) =>{
    let resp = await remittanceModel.getCustomer(id,type)
    return resp;
}

const createRamittance = async (user) =>{

    
    console.log("create remmitance",user);
    return await remittanceModel.createRamittance(user);

}

module.exports = {
    createRamittance,
    getCustomers,
    getCustomer
}