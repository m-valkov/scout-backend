import { Middleware } from '../interfaces/express';
import expressBasicAuth, { BasicAuthMiddlewareOptions } from 'express-basic-auth';
import { HttpConfig } from '../configurations/Http';

const authOptions: BasicAuthMiddlewareOptions = {
  users: { developer: HttpConfig.BASIC_AUTH_PASSWORD },
  challenge: true,
};

export const BasicAuth: Middleware = expressBasicAuth(authOptions);
