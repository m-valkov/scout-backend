import { urlencoded } from 'express';
import { Config } from '../../providers/Config';
import { Middleware } from '../../types/express';

const config = new Config();
export const UrlParser: Middleware = urlencoded({
  limit: config.HttpConfig.MAX_REQUEST_URL_SIZE,
  extended: config.HttpConfig.URL_EXTENDED_ENABLED,
});
