import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../../exceptions/BaseError';
import { DebugLogger } from '../../loggers/vendor/DebugLogger';
import { ErrorLogger } from '../../loggers/vendor/ErrorLogger';
import { TelegramLogger } from '../../loggers/vendor/TelegramLogger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CriticalErrorHandler: ErrorRequestHandler = (err: Error | BaseError, req: Request, _res: Response, _next: NextFunction): void => {
  TelegramLogger.log(err, req);
  ErrorLogger.log(err, req);
  if (!(err instanceof BaseError)) {
    DebugLogger.debug('Critical error. Emergency application shutdown');
    process.exit(1);
  }
};
