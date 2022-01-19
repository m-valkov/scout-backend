import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';
import { AppConfig } from '../../configurations/App';

const { combine, printf, timestamp, colorize } = format;

const accessLoggerOptions: LoggerOptions = {
  format: combine(
    colorize({ all: true }),
    timestamp({ format: 'DD.MM.YYYY HH:mm:ss' }),
    printf(info => `${info.level} :: ${info.timestamp} :: ${info.message}`),
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
