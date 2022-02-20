import { Middleware } from '../types/express';
import { Compression } from '../middlewares/vendor/Compression';
import { CORS } from '../middlewares/vendor/Cors';
import { Helmet } from '../middlewares/vendor/Helmet';
import { JsonBodyParser } from '../middlewares/vendor/JsonBodyParser';
import { Logger } from '../middlewares/vendor/AccessLogger';
import { RateLimit } from '../middlewares/vendor/RateLimit';
import { UrlParser } from '../middlewares/vendor/UrlParser';
import { Api404Handler } from '../handlers/errors/Api404Handler';

export const PreMiddlewares: Middleware[] = [
  RateLimit,
  UrlParser,
  CORS,
  Helmet,
  JsonBodyParser,
  Compression,
  Logger,
];
export const PostMiddlewares: Middleware[] = [Api404Handler];
