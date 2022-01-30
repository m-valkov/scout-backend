import * as Sentry from '@sentry/node';
import { ErrorRequestHandler } from 'express';
import { LoggerConfig } from '../../configurations/Logger';
import { BaseError } from '../../exceptions/BaseError';

Sentry.init({ dsn: LoggerConfig.SENTRY_DSN });
export const SentryErrorHandler: ErrorRequestHandler = Sentry.Handlers.errorHandler({
  shouldHandleError(error: Error | BaseError) {
    if (!(error instanceof BaseError)) {
      return true;
    }
    return false;
  },
});
