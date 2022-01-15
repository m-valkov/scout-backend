import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../exceptions/BaseError';
import { DebugLogger } from '../loggers/DebugLogger';
import { ErrorLogger } from '../loggers/ErrorLogger';

export const ErrorsCatcher: ErrorRequestHandler = (err: BaseError, req: Request, res: Response, next: NextFunction): void => {
  if (err.isOperational) {
    DebugLogger.debug(err.message);
    ErrorLogger.error(err.message);
  } else {
    ErrorLogger.error(err.stack);
  }
  next(err);
};
