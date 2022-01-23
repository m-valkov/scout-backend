import express, { Application, ErrorRequestHandler, Router } from 'express';
import { Middleware } from '../interfaces/express';
import { DebugLogger } from '../loggers/vendor/DebugLogger';

export class HttpServer {
  public transport: Application;

  constructor(beforeEachMiddlewares: Middleware[], afterEachMiddlewares: Middleware[], routes: Router, errorHandlers: ErrorRequestHandler[], port: number) {
    this.transport = express();
    DebugLogger.debug('HttpServer created');

    this.transport.use(beforeEachMiddlewares);
    DebugLogger.debug('Before each requests middlewares mounted');

    this.transport.use(routes);
    DebugLogger.debug('Router mounted');

    this.transport.use(afterEachMiddlewares);
    DebugLogger.debug('After each requests middlewares mounted');

    this.transport.use(errorHandlers);
    DebugLogger.debug('Error handlers mounted');

    this.transport.listen(port);
    DebugLogger.debug(`Server listen on ${port} port`);
  }
}
