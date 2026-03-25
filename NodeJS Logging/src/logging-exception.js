import winston from 'winston';

const logger = winston.createLogger({
  // handleExceptions: true,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ handleExceptions: true, filename: 'application.log' }),
  ]
})

hello()