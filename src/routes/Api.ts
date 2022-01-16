import { Router } from 'express';
import { HelloHandler } from '../handlers/HelloHandler';

export const Api: Router = Router();

Api.get('/', HelloHandler);
