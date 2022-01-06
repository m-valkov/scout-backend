import 'dotenv/config';
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
    this.httpServer.listen();
  }
}
