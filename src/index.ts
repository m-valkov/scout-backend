import 'dotenv/config';
import { ExpressServer } from './internal/providers/Server';
import {
  PreMiddlewares,
  PostMiddlewares,
} from './internal/providers/Middlewares';
import { Routes } from './internal/providers/Routes';
import { ErrorHandlers } from './internal/providers/ErrorHandlers';
import { Config } from './internal/providers/Config';

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
