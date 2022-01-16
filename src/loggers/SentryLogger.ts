import { createLogger, LoggerOptions, Logger } from 'winston';
import Sentry from 'winston-sentry-log';
import { AppConfig } from '../configurations/App';
import { LoggerConfig } from '../configurations/Logger';

const sentryOptions = {
  config: {
    dsn: LoggerConfig.SENTRY_DSN,
    environment: AppConfig.IS_PRODUCTION ? 'production' : 'developing',
  },
  level: 'error',
};

const errorLoggerOptions: LoggerOptions = {
  transports: [new Sentry(sentryOptions)],
};

export const SentryLogger: Logger = createLogger(errorLoggerOptions);
