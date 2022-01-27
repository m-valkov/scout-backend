import { urlencoded } from 'express';
import { HttpConfig } from '../../configurations/Http';
import { Middleware } from '../../types/express';

export const UrlParser: Middleware = urlencoded({
  limit: HttpConfig.MAX_REQUEST_URL_SIZE,
  extended: HttpConfig.URL_EXTENDED_ENABLED,
});
