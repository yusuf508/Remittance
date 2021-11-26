const status = require("http-status");
const { AppError } = require("../payload/AppError");
const { AppiResponse } = require("../payload/AppiResponses");
const jwt = require('jsonwebtoken');
const permission = require('../modules/permissions')
let { handleAsync } = require('../utils/util');
const NodeCache = require('node-cache');
const myCache = new NodeCache();



// const auth = (req, res, next) => {

// //heck the header

// // let token = req.headers.accesstoken 
// // console.log("The token is: "+token);

// const authHeader = req.headers.authorization;
//     const token = authHeader.split(' ')[1];

// if(!token){
//     throw new AppError(401, 'please provide token');
// }


// let response =jwt.verify(token,process.env.JWT_SECRET_KEY );

// if(response){
//     next();
// }

// throw new AppError(401, 'verify a token please');

// }



const auth = (req, res, next) => {
    let authHeaders = req.headers.authorization;
    if (!authHeaders) {
        
        throw new AppError(401, 'Pleasse provide a token')
    }
    let token = authHeaders.split(' ')[1];
    let response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    var decoded = jwt.decode(token, { complete: true });
    if (response) {
        myCache.set("myKey", decoded);
        return next();
    }

    throw new AppError(401, 'you have not permission');

   // throw new ApiError(401, 'Your Token has expired, please login again');

}

const authentication = (data) => handleAsync(async (req, res, next) => {
    let token = myCache.get("myKey");
    let userid = token.payload.userid;
    let role = token.payload.role;
    let state = false;
    console.log(state);
    let usrPermissions = await permission.getSingleUserPermission(role);
    console.log("User Permission"+usrPermissions);
    usrPermissions.forEach(d => {
        if (d.PERMISSIONNAME == data) {
            state = true;
        }
    });
    if (state) {
        return next();
    }

    throw new ApiError(401, `you haven't any permission to ${data} `)
});





module.exports = 
{
    auth,
    authentication
}
    