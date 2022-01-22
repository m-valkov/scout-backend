import { App } from '../providers/App';
import request from 'supertest';

describe('Route /api/', () => {
  const mApp = new App().httpServer.transport;
  it('return 200', async () => {
    const res = await request(mApp).get('/api/');
    expect(res.statusCode).toEqual(200);
  });
});
