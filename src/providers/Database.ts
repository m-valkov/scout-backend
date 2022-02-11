import { connect } from 'mongoose';
import { DebugLogger } from '../loggers/vendor/DebugLogger';
import { Config } from './Config';

const uri = new Config().DbConfig.MONGO_DB_URI;
export const init = () => {
  connect(uri).then(() => {
    DebugLogger.debug('DB connected');
  });
};
