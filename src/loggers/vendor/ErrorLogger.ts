import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';
import { LoggerConfig } from '../../configurations/Logger';

const { combine, printf, timestamp } = format;

const errorLoggerOptions: LoggerOptions = {
  format: combine(
    timestamp({ format: 'DD.MM.YYYY HH:mm:ss' }),
    printf(info => `${info.level.toUpperCase()} :: ${info.timestamp} :: ${info.message}`),
  ),
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
