import 'dotenv/config';
import { Api404Handler } from '../handlers/Api404Handler';
import { ErrorHandlers } from './ErrorHandlers';
import { HttpServer } from './TempApp';
import { Middlewares } from './Middlewares';
import { Routes } from './Routes';
import { HttpConfig } from '../configurations/Http';

export class App {
  public httpServer: HttpServer;

  constructor() {
    this.httpServer = new HttpServer(Middlewares, [Api404Handler], Routes, ErrorHandlers, HttpConfig.PORT);
  }
}
