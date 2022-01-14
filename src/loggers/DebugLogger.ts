import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';
import { AppConfig } from '../configurations/App';

const { combine, printf } = format;

const accessLoggerOptions: LoggerOptions = {
  format: combine(printf(info => `${info.level.toUpperCase()}: ${info.message}`)),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      silent: AppConfig.IS_PRODUCTION,
    }),
  ],
};

export const DebugLogger: Logger = createLogger(accessLoggerOptions);
