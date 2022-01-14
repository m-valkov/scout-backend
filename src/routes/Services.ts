import { Router } from 'express';
import { Api404Handler } from '../controllers/Api404Handler';

export const Services: Router = Router();
Services.use(Api404Handler);
