process.env.PORT = '5000';
process.env.NODE_ENV = 'production';

import { App } from '../providers/App';
import request from 'supertest';
import { ResponseMessage } from '../types/responses';
import { Config } from '../providers/Config';

const config = new Config();

const prefix = config.ApiConfig.API_PREFIX;

const mApp = new App().httpServer.server;

describe(`Router`, () => {
  afterAll(() => {
    mApp.close();
  });
  it('should return 200 on /health', async () => {
    const responseMessage: ResponseMessage = {
      status: 'OK',
      data: {
        message: 'Alive',
      },
    };

    await request(mApp).get('/health').expect(200).expect(responseMessage);
  });
  it(`should return 200 on ${prefix}/`, async () => {
    const responseMessage: ResponseMessage = {
      status: 'OK',
      data: {
        message: 'Hello World!',
      },
    };
    await request(mApp).get(`${prefix}/`).expect(200).expect(responseMessage);
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
    await request(mApp).get(`/broken/path`).expect(404).expect(responseMessage);
  });
});
