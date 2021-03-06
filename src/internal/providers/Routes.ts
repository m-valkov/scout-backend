import { Router } from 'express';
import { Api as ApiRouter } from '../../routes/Api';
import { ApiDocHandler } from '../handlers/ApiDocHandler';
import { HealthCheckHandler } from '../handlers/HealthCheck';
import { TsDocHandler } from '../handlers/TsDocHandler';
import { Config } from './Config';

const config = new Config();

export const Routes: Router = Router();

Routes.use('/health', HealthCheckHandler);
Routes.use('/docs', TsDocHandler);
Routes.use(config.ApiConfig.API_PREFIX, ApiRouter);
Routes.use(config.ApiConfig.API_PREFIX, ApiDocHandler);
