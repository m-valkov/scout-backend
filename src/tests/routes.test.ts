process.env.PORT = '5000';
process.env.NODE_ENV = 'production';

import { App } from '../providers/App';
import { APIConfig } from '../configurations/Api';
import request from 'supertest';
import { Api404Error } from '../exceptions/Api404';

const prefix = APIConfig.API_PREFIX;

const mApp = new App().httpServer.server;

describe(`Router`, () => {
  afterAll(() => {
    mApp.close();
  });
  it(`should return 200 on ${prefix}/`, () => {
    request(mApp).get(`${prefix}/`).expect(200);
  });
  it(`should return 404 on /broken/path`, () => {
    request(mApp).get(`/broken/path`).expect(404).expect(Api404Error);
  });
});
