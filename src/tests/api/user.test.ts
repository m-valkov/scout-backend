process.env.PORT = '5001';
process.env.NODE_ENV = 'production';

import { ExpressServer } from '../../providers/Server';
import { PreMiddlewares, PostMiddlewares } from '../../providers/Middlewares';
import { Routes } from '../../providers/Routes';
import { ErrorHandlers } from '../../providers/ErrorHandlers';
import { Config } from '../../providers/Config';
import request from 'supertest';

const config = new Config();
const app = new ExpressServer();
const prefix = config.ApiConfig.API_PREFIX;

describe(`POST /user`, () => {
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
