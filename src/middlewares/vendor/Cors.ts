import cors, { CorsOptions } from 'cors';
import { HttpConfig } from '../../configurations/Http';
import { Middleware } from '../../types/express';

const corsOptions: CorsOptions = {
  origin: HttpConfig.DOMAIN,
};

export const CORS: Middleware = cors(corsOptions);
