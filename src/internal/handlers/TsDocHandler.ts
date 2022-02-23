import { BasicAuth } from '../middlewares/vendor/BasicAuth';
import { Router, static as Static } from 'express';
import path from 'path';

export const TsDocHandler: Router = Router();

const docPath = path.join(String(process.env.PWD), 'docs');

TsDocHandler.use(
  BasicAuth,
  Static(docPath, { index: 'index.html' })
);
