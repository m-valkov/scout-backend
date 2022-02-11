import Mongoose from 'mongoose';
import { DebugLogger } from '../loggers/vendor/DebugLogger';
import { Config } from './Config';

let database: Mongoose.Connection;

export const init = (): void => {
  const uri = new Config().DbConfig.MONGO_DB_URI;

  if (database) {
    return;
  }

  Mongoose.connect(uri, {});
  database = Mongoose.connection;

  database.once('open', async () => {
    DebugLogger.debug('DB connected');
  });
};
