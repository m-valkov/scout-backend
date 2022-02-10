import 'dotenv/config';
import * as ProcessControl from './helpers/vendor/ProcessControl';
import { App } from './providers/App';

new App();
ProcessControl.init();
