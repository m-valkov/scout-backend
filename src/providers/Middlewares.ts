import { Middleware } from '../interfaces/express';
import { Compression } from '../middlewares/Compression';
import { CORS } from '../middlewares/Cors';
import { Helmet } from '../middlewares/Helmet';
import { JsonBodyParser } from '../middlewares/JsonBodyParser';
import { Logger } from '../middlewares/Logger';

export const Middlewares: Middleware[] = [CORS, Helmet, JsonBodyParser, Compression, Logger];
