import { Middleware } from '../../types/express';
import expressBasicAuth, {
  BasicAuthMiddlewareOptions,
} from 'express-basic-auth';
import { Config } from '../../providers/Config';

const config = new Config();
const authOptions: BasicAuthMiddlewareOptions = {
  users: { developer: config.HttpConfig.BASIC_AUTH_PASSWORD },
  challenge: true,
};

export const BasicAuth: Middleware = expressBasicAuth(authOptions);
