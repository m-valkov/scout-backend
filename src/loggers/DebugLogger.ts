import { createLogger, transports, LoggerOptions, Logger, format } from 'winston';

const { combine, printf } = format;

const accessLoggerOptions: LoggerOptions = {
  format: combine(printf(info => `${info.level.toUpperCase()}: ${info.message}`)),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
  ],
};

export const DebugLogger: Logger = createLogger(accessLoggerOptions);
