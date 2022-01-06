import { Router } from 'express';
import { Api } from '../routes/Api';
import { APIConfig } from '../configurations';

export const Routes: Router = Router();

Routes.use(APIConfig.API_PREFIX, Api);
