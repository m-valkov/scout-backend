import { Router } from 'express';
import { Api } from '../routes/Api';
import { ApiDocHandler } from '../handlers/ApiDocHandler';
import { HealthCheckHandler } from '../handlers/HealthCheck';
import { Config } from './Config';

const config = new Config();

export const Routes: Router = Router();

Routes.use('/health', HealthCheckHandler);
Routes.use(config.ApiConfig.API_PREFIX, Api);
Routes.use(config.ApiConfig.API_PREFIX, ApiDocHandler);
