import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';
import { Config } from '../../providers/Config';

const { combine, printf } = format;
const config = new Config();

const accessLoggerOptions: LoggerOptions = {
  format: combine(printf(info => `${info.level.toUpperCase()}: ${info.message}`)),
  transports: [
    new transports.File({
      level: 'info',
      filename: './logs/access.log',
      maxsize: config.LoggerConfig.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES,
      maxFiles: config.LoggerConfig.ACCESS_LOG_MAX_FILES,
    }),
  ],
};

export const AccessLogger: Logger = createLogger(accessLoggerOptions);
