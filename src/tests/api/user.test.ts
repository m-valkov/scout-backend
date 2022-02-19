process.env.PORT = '5000';
process.env.NODE_ENV = 'production';

import { App } from '../../providers/App';
import request from 'supertest';
import { ResponseMessage } from '../../types/responses';
// import { Config } from '../providers/Config';
import { HttpStatusCode } from '../../configurations/HttpStatusCode';
import { Config } from '../../providers/Config';

const config = new Config();

const prefix = config.ApiConfig.API_PREFIX;

const mApp = new App().httpServer.server;

describe(`POST /user`, () => {
  it('should retun 400 with empty body', async () => {
    await request(mApp)
      .post(`${prefix}/user`)
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
  });
});
