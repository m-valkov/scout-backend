import { Router } from 'express';

export const Api: Router = Router();

Api.get('/', (req, res) => {
  res.json({ status: '200' });
});
