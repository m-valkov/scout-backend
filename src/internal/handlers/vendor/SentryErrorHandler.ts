import * as Sentry from '@sentry/node';
import { ErrorRequestHandler } from 'express';
import { BaseError } from '../../exceptions/BaseError';
import { Config } from '../../providers/Config';

const config = new Config();

Sentry.init({ dsn: config.LoggerConfig.SENTRY_DSN });
export const SentryErrorHandler: ErrorRequestHandler =
  Sentry.Handlers.errorHandler({
    shouldHandleError(error: Error | BaseError) {
      if (!(error instanceof BaseError)) {
        return true;
      }
      return false;
    },
  });
