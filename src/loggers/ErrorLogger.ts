import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';
import { LoggerConfig } from '../configurations/Logger';

const { combine, printf } = format;

const errorLoggerOptions: LoggerOptions = {
  format: combine(printf(info => `${info.level.toUpperCase()}: ${info.message}`)),
  transports: [
    new transports.File({
      level: 'error',
      filename: './logs/error.log',
      maxsize: LoggerConfig.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES,
      maxFiles: LoggerConfig.ERROR_LOG_MAX_FILES,
    }),
  ],
};

export const ErrorLogger: Logger = createLogger(errorLoggerOptions);
