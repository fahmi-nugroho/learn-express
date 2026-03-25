import winston, { info } from 'winston';

test('create new logger with combine format', () => {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console()
    ]
  })

  logger.error('Hello, Winston!');
  logger.warn('Hello, Winston!');
  logger.info('Hello, Winston!');
})