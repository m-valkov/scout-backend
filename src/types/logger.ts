import { Request } from 'express';

export interface ILogger {
  log(err: Error, req: Request): void;
}
