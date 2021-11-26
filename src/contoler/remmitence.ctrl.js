// const status = require("http-status");
// const {remittanceService} = require("../service");
// const {ApiResponse} = require("../payload/ApiResponse");
// // const {handleAsync} = require("../utils/util");
// const {ApiError} = require("../payload/ApiError");




// const createRamittance =  (req, res) => {

   
//     res.status(status.OK)
//         .send(new ApiResponse(status.OK, 'message', 'this is ramittance'));

// };

// module.exports = {
//     createRamittance
// }


let status = require('http-status')
let remittanceService = require('../services/remittance.service')
let {ApiError} =require ('../payload/ApiErrors')
let {ApiResponse} = require ('../payload/ApiResponses')

const getCustomers = async (req, res) =>{
    let result = await remittanceService.getCustomers();
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'got it', result))

}

const getCustomer = async (req, res) =>{
    let result = await remittanceService.getCustomer(req.params.id,req.params.type);
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'got it', result))

}

const createRamittance = async (req,res) =>{
    console.log("create remittance");

res.status(status.OK)
            .send(new ApiResponse(status.OK, 'message', ' not implemented yet'))
}


const test = (req,res)=>{
    return new ApiResponse(status.OK,'it workin in controler','got it');
}
module.exports = {
    createRamittance,
    getCustomers,
    getCustomer,
    test
}