import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';
import { Config } from '../../providers/Config';

const { combine, printf, timestamp, colorize } = format;
const config = new Config();

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
      silent: config.AppConfig.IS_PRODUCTION,
    }),
  ],
};

export const DebugLogger: Logger = createLogger(accessLoggerOptions);
