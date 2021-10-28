 
 
 const winston = require('winston');
 const { combine, timestamp, label, printf, prettyPrint } = winston.format;

// const { createLogger, format, transports } = require('winston');

// const { combine, timestamp, label, printf } = winston.format;






// const levels = { 
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//  };


//  const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}`;
// });
//   const logger = winston.createLogger({
// format: combine(
//   label({ label: 'Task 6' }),
//   timestamp(),
//   myFormat
// ),
//     transports: [
//       new winston.transports.Console(),
//       new winston.transports.File({ filename: 'combined.log' })
//     ]
//   });


const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const levels = {   
   error: 0,    
   warn: 1,   
     info: 2,   
      http: 3,  
        verbose: 4,  
          debug: 5,  
            silly: 6  };

const logger = winston.createLogger({
  format:combine(
      winston.format.colorize(),
      label({ label: process.env.op }),
      timestamp(),
      //prettyPrint()
       myFormat,

    ),
  transports: [
 
  new winston.transports.File({
      filename: 'combined.log',
      level: 'info'
    }),
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'errors.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: 'http.log',
      level: 'http'
    })

  ]
});









  module.exports =logger;

