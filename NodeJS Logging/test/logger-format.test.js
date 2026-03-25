import winston, { info } from 'winston';

test('create new logger with format', () => {
  const logger = winston.createLogger({
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
    transports: [
      new winston.transports.Console()
    ]
  })

  logger.log({ level: 'info', message: 'Hello, Winston!' });
})

test('create new logger with printf format', () => {
  const logger = winston.createLogger({
    format: winston.format.printf(info => `${new Date()} : ${info.level.toUpperCase()}: ${info.message}`),
    transports: [
      new winston.transports.Console()
    ]
  })

  logger.log({ level: 'info', message: 'Hello, Winston!' });
})