import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../exceptions/BaseError';
import { DebugLogger } from '../loggers/vendor/DebugLogger';
import { ErrorLogger } from '../loggers/vendor/ErrorLogger';
import { SentryLogger } from '../loggers/vendor/SentryLogger';
import { TelegramLogger } from '../loggers/vendor/TelegramLogger';

export const ErrorsCatcher: ErrorRequestHandler = (err: BaseError, req: Request, res: Response, next: NextFunction): void => {
  if (err.isOperational) {
    DebugLogger.debug(err.message);
    ErrorLogger.error(err.message);
  } else {
    DebugLogger.debug(err.stack);
    ErrorLogger.error(err.stack);
    SentryLogger.error(err.stack);
    TelegramLogger.error(err.stack);
  }
  next(err);
};
