import { AccessLogger } from '../../loggers/vendor/AccessLogger';
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

export const Logger: Middleware = morgan('combined', { stream });
