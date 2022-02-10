import 'dotenv/config';
import * as ProcessControl from './helpers/ProcessControl';
import { App } from './providers/App';

new App();
ProcessControl.init();
