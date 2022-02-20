process.env.PORT = '5000';
process.env.NODE_ENV = 'production';

import { ExpressServer } from '../../internal/providers/Server';
import {
  PreMiddlewares,
  PostMiddlewares,
} from '../../internal/providers/Middlewares';
import { Routes } from '../../internal/providers/Routes';
import { ErrorHandlers } from '../../internal/providers/ErrorHandlers';
import { Config } from '../../internal/providers/Config';
import { ResponseMessage } from '../../internal/types/responses';
import { HttpStatusCode } from '../../internal/configurations/HttpStatusCode';
import request from 'supertest';

const config = new Config();
const app = new ExpressServer();

describe(`Router`, () => {
  beforeAll(() => {
    app
      .mountPreMiddleware(PreMiddlewares)
      .mountRoutes(Routes)
      .mountPostMiddleware(PostMiddlewares)
      .mountErrorHandlers(ErrorHandlers)
      .mountProcessControl()
      .serve(config.HttpConfig.PORT);
  });
  afterAll(() => {
    app.close();
  });
  it('should return 200 on /health', async () => {
    const responseMessage: ResponseMessage = {
      status: 'OK',
      data: {
        message: 'Alive',
        statusCode: HttpStatusCode.OK,
      },
    };
    await request(app.server)
      .get('/health')
      .expect(200)
      .expect(responseMessage);
  });

  it(`should return 404 on /broken/path`, async () => {
    const responseMessage: ResponseMessage = {
      status: 'FAIL',
      error: {
        statusCode: 404,
        description: 'Not found',
        message: '/broken/path :: route not found',
      },
    };
    await request(app.server)
      .get(`/broken/path`)
      .expect(404)
      .expect(responseMessage);
  });
});
