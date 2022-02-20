import Mongoose from 'mongoose';
import { DebugLogger } from '../loggers/vendor/DebugLogger';

let database: Mongoose.Connection;

export const init = (uri: string): void => {
  if (database) {
    return;
  }

  Mongoose.connect(uri, {});
  database = Mongoose.connection;

  database.once('open', async () => {
    DebugLogger.debug('DB connected');
  });
};
