import 'dotenv/config';
import { Api404Handler } from '../handlers/Api404Handler';
import { ErrorsCatcher } from '../middlewares/ErrorsCatcher';
import { HttpServer } from './HttpServer';
import { Middlewares } from './Middlewares';
import { Routes } from './Routes';

export class App {
  private httpServer: HttpServer;

  constructor() {
    this.httpServer = new HttpServer();
  }

  public run(): void {
    this.httpServer.mountMiddlewares(Middlewares);
    this.httpServer.mountRoutes(Routes);
    this.httpServer.mountMiddlewares([Api404Handler]);
    this.httpServer.mountErrorHandler(ErrorsCatcher);
    this.httpServer.listen();
  }
}
