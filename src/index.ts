// load .env if not prod
if (!(process.env.NODE_ENV === 'production')) {
  import('dotenv').then(dotenv => {
    dotenv.config();
  });
}

import * as ProcessControl from './lib/ProcessControl';
import { App } from './providers/App';

ProcessControl.init();

new App();
