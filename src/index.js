require('dotenv').config();
let express = require('express');
const logger = require('./config/logger');
const app = express();
 const port = process.env.PORT;
//var port =900;
const httpStatus = require('http-status');
const { AppError } = require('./payload/AppError');

//const logger = require('.././src/config/logger');
// const port1 = process.env.port1;

// const authroot =require('./router/v1/auth.root');

/**
 * midlware
 */
 app.use(express.json());


/**
 * 
 Router midleware
 */
//logger.info("hello logger works");

let routcatalog = require('./router/v1/index');
app.use('/v1',routcatalog);

let db = require('./config/database')


// checking the AppI ERROR
app.use((req,res,next)=>{

//const obj = require('./payload/AppError');
let Status = httpStatus.NOT_FOUND;
let err;
let message = err ="API not found";
res.status(Status).send(new AppError(Status,message,err));

});

//All exception handlaning midleware

app.use((err, req, res, next) => { 
    res.status(httpStatus.NOT_FOUND).send(err)
  })

console.log("The Port is:"+port);
app.listen(port, (req, res) => {
   console.log(`it is working on ${process.env.BASE_URL}: ${port}`);
  // console.log("We are listening Port "+port);
});