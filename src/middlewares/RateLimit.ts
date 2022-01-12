import rateLimit from 'express-rate-limit';
import { HttpConfig } from '../configurations/Http';
import { Middleware } from '../interfaces/express';

export const RateLimit: Middleware = rateLimit({
  windowMs: HttpConfig.RATE_LIMIT_WINDOWS_MS,
  max: HttpConfig.RATE_LIMIT_MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
});
