import { Middleware } from '../interfaces/express';
import { CORS } from '../middlewares/Cors';
import { Helmet } from '../middlewares/Helmet';
import { Logger } from '../middlewares/Logger';

export const Middlewares: Middleware[] = [CORS, Helmet, Logger];
