process.env.PORT = '5000';
process.env.NODE_ENV = 'production';

import { ExpressServer } from '../../providers/Server';
import { PreMiddlewares, PostMiddlewares } from '../../providers/Middlewares';
import { Routes } from '../../providers/Routes';
import { ErrorHandlers } from '../../providers/ErrorHandlers';
import { Config } from '../../providers/Config';
import { ResponseMessage } from '../../types/responses';
import { HttpStatusCode } from '../../configurations/HttpStatusCode';
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
