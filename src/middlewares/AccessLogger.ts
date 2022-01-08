import { AccessLogger } from '../providers/Logger';
import morgan from 'morgan';
import { Middleware } from '../interfaces/express';

class MorganStream {
  write(text: string) {
    AccessLogger.info(text);
  }
}

const stream = new MorganStream();

export const Logger: Middleware = morgan('combined', { stream });
