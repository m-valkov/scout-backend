import { json } from 'express';
import { Middleware } from '../interfaces/express';

export const JsonBodyParser: Middleware = json();
