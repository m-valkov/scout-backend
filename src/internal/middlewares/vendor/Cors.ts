import cors, { CorsOptions } from 'cors';
import { Config } from '../../providers/Config';
import { Middleware } from '../../types/express';

const config = new Config();

const corsOptions: CorsOptions = {
  origin: config.HttpConfig.DOMAIN,
};

export const CORS: Middleware = cors(corsOptions);
