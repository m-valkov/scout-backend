import { ErrorRequestHandler, Router } from 'express';
import { Middleware } from './express';

export interface IServer {
  serve(port: number): IServer;
  close(): void;
  mountPreMiddleware(m: Middleware[]): IServer;
  mountPostMiddleware(m: Middleware[]): IServer;
  mountRoutes(r: Router): IServer;
  mountErrorHandlers(e: ErrorRequestHandler[]): IServer;
  mountDataBase(uri: string): IServer;
  mountProcessControl(): IServer;
}
