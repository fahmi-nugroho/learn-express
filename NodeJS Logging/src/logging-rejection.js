import winston from 'winston';

const logger = winston.createLogger({
  // handleExceptions: true,
  // handleRejections: true,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ handleExceptions: true, handleRejections: true, filename: 'application.log' }),
  ]
})

async function callAsync() {
  return Promise.reject('Ups');
}

callAsync()