import 'dotenv/config';
import { ExpressServer } from './providers/Server';
import { PreMiddlewares, PostMiddlewares } from './providers/Middlewares';
import { Routes } from './providers/Routes';
import { ErrorHandlers } from './providers/ErrorHandlers';
import { Config } from './providers/Config';

const config = new Config();
const server = new ExpressServer();

server
  .mountPreMiddleware(PreMiddlewares)
  .mountRoutes(Routes)
  .mountPostMiddleware(PostMiddlewares)
  .mountErrorHandlers(ErrorHandlers)
  .mountDataBase(config.DbConfig.MONGO_DB_URI)
  .mountProcessControl()
  .serve(config.HttpConfig.PORT);
