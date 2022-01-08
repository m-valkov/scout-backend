import {
  createLogger,
  transports,
  LoggerOptions,
  Logger,
  format,
} from 'winston';

const { combine, printf } = format;

const accessLoggerOptions: LoggerOptions = {
  format: combine(
    printf(info => `${info.level.toUpperCase()}: ${info.message}`),
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
    new transports.File({
      level: 'debug',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
    }),
  ],
};

export const AccessLogger: Logger = createLogger(accessLoggerOptions);
