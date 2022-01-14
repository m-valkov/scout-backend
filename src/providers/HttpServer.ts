import express, { Application, ErrorRequestHandler, Router } from 'express';
import { HttpConfig } from '../configurations/Http';
import { Middleware } from '../interfaces/express';

export class HttpServer {
  private transport: Application;

  constructor() {
    this.transport = express();
  }

  public mountRoutes(routers: Router): void {
    this.transport.use(routers);
  }

  public mountMiddlewares(middlewares: Middleware[]): void {
    this.transport.use(middlewares);
  }

  public mountErrorHandler(errorHandler: ErrorRequestHandler): void {
    this.transport.use(errorHandler);
  }

  public listen(): void {
    this.transport.listen(HttpConfig.PORT);
  }
}
