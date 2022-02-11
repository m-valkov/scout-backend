import 'dotenv/config';
import * as ProcessControl from './helpers/vendor/ProcessControl';
import * as DataBase from './providers/Database';
import { App } from './providers/App';

ProcessControl.init();
DataBase.init();

new App();
