import { AccessLogger } from '../providers/Logger';
import morgan from 'morgan';
import { Middleware } from '../interfaces/express';

class MyStream {
  write(text: string) {
    AccessLogger.info(text);
  }
}

const myStream = new MyStream();

export const Logger: Middleware = morgan('combined', { stream: myStream });
