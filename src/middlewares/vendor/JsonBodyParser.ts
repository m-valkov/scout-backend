import { json } from 'express';
import { Config } from '../../providers/Config';
import { Middleware } from '../../types/express';

const config = new Config();
export const JsonBodyParser: Middleware = json({
  limit: config.HttpConfig.MAX_REQUEST_BODY_SIZE,
});
