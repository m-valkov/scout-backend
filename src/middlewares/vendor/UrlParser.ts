import { urlencoded } from 'express';
import { HttpConfig } from '../../configurations/Http';
import { Middleware } from '../../interfaces/express';

export const UrlParser: Middleware = urlencoded({
  limit: HttpConfig.MAX_REQUEST_URL_SIZE,
  extended: HttpConfig.IS_URL_EXTENDED,
});
