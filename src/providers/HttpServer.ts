import express, { Application, ErrorRequestHandler, Router } from 'express';
import { Server } from 'http';
import { Middleware } from '../interfaces/express';
import { DebugLogger } from '../loggers/vendor/DebugLogger';

export class HttpServer {
  private _transport: Application;
  public server: Server;

  constructor(beforeEachMiddlewares: Middleware[], afterEachMiddlewares: Middleware[], routes: Router, errorHandlers: ErrorRequestHandler[], port: number) {
    this._transport = express();
    DebugLogger.debug('HttpServer created');

    this._transport.use(beforeEachMiddlewares);
    DebugLogger.debug('Before each requests middlewares mounted');

    this._transport.use(routes);
    DebugLogger.debug('Router mounted');

    this._transport.use(afterEachMiddlewares);
    DebugLogger.debug('After each requests middlewares mounted');

    this._transport.use(errorHandlers);
    DebugLogger.debug('Error handlers mounted');

    this.server = this._transport.listen(port);
    DebugLogger.debug(`Server listen on ${port} port`);
  }
}
