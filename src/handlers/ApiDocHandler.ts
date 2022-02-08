import { SwaggerConfig } from '../configurations/Swagger';
import { BasicAuth } from '../middlewares/vendor/BasicAuth';
import swaggerJSDoc, { Options, SwaggerDefinition } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';
import { Config } from '../providers/Config';

const config = new Config();

const swaggerDefinition: SwaggerDefinition = {
  openapi: config.SwaggerConfig.OPENAPI_VERSION,
  info: {
    title: config.SwaggerConfig.SWAGGER_TITLE,
    version: config.SwaggerConfig.API_VERSION,
  },
  servers: [
    {
      url: config.SwaggerConfig.SERVER_URL,
      description: config.SwaggerConfig.SERVER_DESCRIPTION,
    },
  ],
};

const jsdocOptions: Options = {
  swaggerDefinition,
  apis: ['./**/*.ts'],
};

// TODO: find types for that
const swaggerSpec = swaggerJSDoc(jsdocOptions);

export const ApiDocHandler: Router = Router();

ApiDocHandler.use(config.SwaggerConfig.DOCS_ENDPOINT, BasicAuth, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
