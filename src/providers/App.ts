import 'dotenv/config';
import { Api404Handler } from '../handlers/Api404Handler';
import { ErrorHandlers } from './ErrorHandlers';
import { HttpServer } from './HttpServer';
import { Middlewares } from './Middlewares';
import { Routes } from './Routes';

export class App {
  public httpServer: HttpServer;

  constructor() {
    this.httpServer = new HttpServer();
    this.httpServer.mountMiddlewares(Middlewares);
    this.httpServer.mountRoutes(Routes);
    this.httpServer.mountMiddlewares([Api404Handler]);
    this.httpServer.mountErrorHandlers(ErrorHandlers);
  }

  public run(): void {
    this.httpServer.listen();
  }
}
