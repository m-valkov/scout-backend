import { Router } from 'express';
import { Api } from '../routes/Api';
import { ApiDocHandler } from '../handlers/ApiDocHandler';
import { APIConfig } from '../configurations/Api';
import { BasicAuth } from '../middlewares/vendor/BasicAuth';
import { Services } from '../routes/Services';

export const Routes: Router = Router();

Routes.use(APIConfig.API_PREFIX, Api);
Routes.use(APIConfig.API_PREFIX, BasicAuth, ApiDocHandler);
Routes.use(Services);
