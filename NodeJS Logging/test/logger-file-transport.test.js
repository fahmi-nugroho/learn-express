import winston from 'winston';

test('create new logger console & file transport', () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: 'application.log' }),
      new winston.transports.Console()
    ]
  })

  logger.info('Hello, Winston!');
})