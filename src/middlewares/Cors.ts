import cors, { CorsOptions } from 'cors';
import { CorsConfig } from '../configurations';
import { Middleware } from '../interfaces/express';

const corsOptions: CorsOptions = {
  origin: CorsConfig.DOMAIN,
};

export const CORS: Middleware = cors(corsOptions);
