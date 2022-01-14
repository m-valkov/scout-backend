import { json } from 'express';
import { HttpConfig } from '../../configurations/Http';
import { Middleware } from '../../interfaces/express';

export const JsonBodyParser: Middleware = json({
  limit: HttpConfig.MAX_REQUEST_BODY_SIZE,
});
