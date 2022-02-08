import 'dotenv/config';
import * as ProcessControl from './lib/ProcessControl';
import { App } from './providers/App';
import { Config } from './providers/Config';

Config.parseDotEnvFile().then(() => {
  new App();
  ProcessControl.init();
});
