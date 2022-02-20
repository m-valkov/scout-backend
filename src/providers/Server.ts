import * as ProcessControl from '../helpers/vendor/ProcessControl';
import * as DataBase from '../providers/Database';
import { Server } from 'http';
import { DebugLogger } from '../loggers/vendor/DebugLogger';
import express, { Application, ErrorRequestHandler, Router } from 'express';
import { IServer } from '../types/server';
import { Middleware } from '../types/express';

export class ExpressServer implements IServer {
  private _app: Application = express();
  public server!: Server;
  serve(port: number): IServer {
    this.server = this._app.listen(port);
    DebugLogger.debug(`Server listen on ${port} port`);
    return this;
  }
  close(): void {
    this.server.close(() => {
      DebugLogger.debug('Http server closed');
    });
  }
  mountPreMiddleware(m: Middleware[]): IServer {
    this._app.use(m);
    DebugLogger.debug('PreMiddleware mounted');
    return this;
  }
  mountPostMiddleware(m: Middleware[]): IServer {
    this._app.use(m);
    DebugLogger.debug('PostMiddleware mounted');
    return this;
  }
  mountRoutes(r: Router): IServer {
    this._app.use(r);
    DebugLogger.debug('Router mounted');
    return this;
  }
  mountErrorHandlers(e: ErrorRequestHandler[]): IServer {
    this._app.use(e);
    DebugLogger.debug('ErrorHandlers mounted');
    return this;
  }
  mountDataBase(uri: string): IServer {
    DataBase.init(uri);
    return this;
  }
  mountProcessControl(): IServer {
    ProcessControl.init(this);
    return this;
  }
}
