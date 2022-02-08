import rateLimit from 'express-rate-limit';
import { Config } from '../../providers/Config';
import { Middleware } from '../../types/express';

const config = new Config();
export const RateLimit: Middleware = rateLimit({
  windowMs: config.HttpConfig.RATE_LIMIT_WINDOWS_MS,
  max: config.HttpConfig.RATE_LIMIT_MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
});
