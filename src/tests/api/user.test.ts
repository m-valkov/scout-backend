process.env.PORT = '5001';
process.env.NODE_ENV = 'production';

import { ExpressServer } from '../../internal/providers/Server';
import {
  PreMiddlewares,
  PostMiddlewares,
} from '../../internal/providers/Middlewares';
import { Routes } from '../../internal/providers/Routes';
import { ErrorHandlers } from '../../internal/providers/ErrorHandlers';
import { Config } from '../../internal/providers/Config';
import request from 'supertest';

const config = new Config();
const app = new ExpressServer();
const prefix = config.ApiConfig.API_PREFIX;

describe('POST /user', () => {
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
  it('should retun 400 with empty body', async () => {
    await request(app.server)
      .post(`${prefix}/user`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
  });
});
