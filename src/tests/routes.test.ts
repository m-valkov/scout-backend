process.env.PORT = '5000';
process.env.NODE_ENV = 'production';

import { App } from '../providers/App';
import { APIConfig } from '../configurations/Api';
import request from 'supertest';

const prefix = APIConfig.API_PREFIX;

const mApp = new App().httpServer.server;

describe(`Router`, () => {
  afterAll(() => {
    mApp.close();
  });
  it(`should return 200 on ${prefix}/`, async () => {
    const res = await request(mApp).get(`${prefix}/`);
    expect(res.statusCode).toEqual(200);
  });
  it(`should return 404 on /broken/path`, async () => {
    const res = await request(mApp).get(`/broken/path`);
    expect(res.statusCode).toEqual(404);
  });
});
