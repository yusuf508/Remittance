require('dotenv').config();
let express = require('express');
const logger = require('./config/logger');
const app = express();
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
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

app.use((err, _req, res, _next) => { 
    res.status(httpStatus.NOT_FOUND).send(err)
  })

  



console.log("The Port is:"+port);
app.listen(port, (_req, _res) => {
   console.log(`it is working on ${process.env.BASE_URL}: ${port}`);
  // console.log("We are listening Port "+port);
});