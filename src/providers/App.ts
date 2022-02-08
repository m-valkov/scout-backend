import { Api404Handler } from '../handlers/errors/Api404Handler';
import { ErrorHandlers } from './ErrorHandlers';
import { HttpServer } from './HttpServer';
import { Middlewares } from './Middlewares';
import { Routes } from './Routes';
import { Config } from './Config';

export class App {
  public httpServer: HttpServer;

  constructor() {
    const port = new Config().HttpConfig.PORT;
    this.httpServer = new HttpServer(Middlewares, [Api404Handler], Routes, ErrorHandlers, port);
  }
}
