import { AccessLogger } from '../loggers/AccessLogger';
import morgan from 'morgan';
import { Middleware } from '../interfaces/express';
import { AppConfig } from '../configurations/App';
import { DebugLogger } from '../loggers/DebugLogger';

class MorganStream {
  write(text: string) {
    AccessLogger.info(text);

    if (!AppConfig.IS_PRODUCTION) {
      DebugLogger.debug(text);
    }
  }
}

const stream = new MorganStream();

export const Logger: Middleware = morgan('combined', { stream });
