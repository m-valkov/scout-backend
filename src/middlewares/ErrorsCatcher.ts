import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../exceptions/BaseError';
import { DebugLogger } from '../loggers/DebugLogger';
import { ErrorLogger } from '../loggers/ErrorLogger';
import { SentryLogger } from '../loggers/SentryLogger';

export const ErrorsCatcher: ErrorRequestHandler = (err: BaseError, req: Request, res: Response, next: NextFunction): void => {
  if (err.isOperational) {
    DebugLogger.debug(err.message);
    ErrorLogger.error(err.message);
  } else {
    DebugLogger.debug(err.stack);
    ErrorLogger.error(err.stack);
    SentryLogger.error(err.stack);
  }
  next(err);
};
