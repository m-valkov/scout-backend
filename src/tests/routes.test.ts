process.env.PORT = '5000';
process.env.NODE_ENV = 'production';

import { App } from '../providers/App';
import { APIConfig } from '../configurations/Api';
import request from 'supertest';

const prefix = APIConfig.API_PREFIX;

describe(`Router`, () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it(`should return 200 on ${prefix}/`, async () => {
    const mApp = new App().httpServer.transport;
    const res = await request(mApp).get(`${prefix}/`);
    expect(res.statusCode).toEqual(200);
  });
  it(`should return 404 on /broken/path`, async () => {
    const mApp = new App().httpServer.transport;
    const res = await request(mApp).get(`/broken/path`);
    expect(res.statusCode).toEqual(404);
  });
});
