import { Router } from 'express';
import { HelloHandler } from '../internal/handlers/HelloHandler';
import * as UserController from '../entities/user/user.controller';

export const Api: Router = Router();

Api.get('/', HelloHandler);
Api.post('/user', UserController.NewUser);
