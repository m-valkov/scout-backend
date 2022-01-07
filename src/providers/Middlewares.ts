import { Middleware } from '../interfaces/express';
import { Compression } from '../middlewares/Compression';
import { CORS } from '../middlewares/Cors';
import { Helmet } from '../middlewares/Helmet';
import { JsonBodyParser } from '../middlewares/JsonBodyParser';
import { Logger } from '../middlewares/Logger';
import { UrlParser } from '../middlewares/UrlParser';

export const Middlewares: Middleware[] = [
  UrlParser,
  CORS,
  Helmet,
  JsonBodyParser,
  Compression,
  Logger,
];
