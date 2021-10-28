const status = require("http-status");
const { AppError } = require("../payload/AppError");




const validate = (schema) => (req, res, next) => {


let {value , error} = schema.validate(req.body);
if(error){
    let message = error.details[0].message;
    let Status = status.BAD_REQUEST

    return res.status(Status).send(new AppError(Status, message));
}

next();
    
//         let username = req.body.username;
//         let password = req.body.password;
      
      
//         if(!password){
//                   res.status(status.BAD_REQUEST).send("password is missing");
//    }
//      if(!username){
//           res.status(status.BAD_REQUEST).send("username is missing");
//       }
//        console.log(`username: ${username} and password: ${password}`);
      
      
      
    
//     res.status(404).send("not found ");
//     next();
  
}
module.exports = validate;