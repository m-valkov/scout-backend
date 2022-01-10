import { Router } from 'express';
import { Api } from '../routes/Api';
import { Swagger } from '../routes/Swagger';
import { APIConfig } from '../configurations';

export const Routes: Router = Router();

Routes.use(APIConfig.API_PREFIX, Api);
Routes.use(APIConfig.API_PREFIX, Swagger);
