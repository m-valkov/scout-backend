import { AccessLogger } from '../../loggers/vendor/AccessLogger';
import { Request } from 'express';
import morgan from 'morgan';
import { Middleware } from '../../types/express';
import { DebugLogger } from '../../loggers/vendor/DebugLogger';

class MorganStream {
  write(text: string) {
    AccessLogger.info(text);
    DebugLogger.debug(text);
  }
}

const stream = new MorganStream();
const skip = (req: Request): boolean => {
  return req.originalUrl.startsWith('/health');
};
export const Logger: Middleware = morgan('combined', { stream, skip });
