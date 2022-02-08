import 'dotenv/config';
import * as ProcessControl from './lib/ProcessControl';
import { App } from './providers/App';

new App();
ProcessControl.init();
