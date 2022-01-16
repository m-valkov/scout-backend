import { createLogger, LoggerOptions, Logger } from 'winston';
import Sentry from 'winston-sentry-log';
import { LoggerConfig } from '../configurations/Logger';

const sentryOptions = {
  config: {
    dsn: LoggerConfig.SENTRY_DSN,
  },
  level: 'error',
};

const errorLoggerOptions: LoggerOptions = {
  transports: [new Sentry(sentryOptions)],
};

export const SentryLogger: Logger = createLogger(errorLoggerOptions);
