import {
  createLogger,
  transports,
  LoggerOptions,
  Logger,
  format,
} from 'winston';
import { LoggerConfig } from '../configurations';

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
      filename: './logs/access.log',
      maxsize: LoggerConfig.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES,
      maxFiles: LoggerConfig.ACCESS_LOG_MAX_FILES,
    }),
  ],
};

export const AccessLogger: Logger = createLogger(accessLoggerOptions);
