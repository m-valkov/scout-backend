import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';
import { AppConfig } from '../configurations/App';

const { combine, printf, timestamp } = format;

const accessLoggerOptions: LoggerOptions = {
  format: combine(
    timestamp({ format: 'DD.MM.YYYY HH:mm:ss' }),
    printf(info => `${info.level.toUpperCase()} :: ${info.timestamp} :: ${info.message}`),
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      silent: AppConfig.IS_PRODUCTION,
    }),
  ],
};

export const DebugLogger: Logger = createLogger(accessLoggerOptions);
