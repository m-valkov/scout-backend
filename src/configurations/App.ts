import { IAppConfig, ProcessEnv } from '../types/config';

export class AppConfig implements IAppConfig {
  private static _instance: AppConfig;
  public IS_PRODUCTION!: boolean;

  constructor(env: ProcessEnv) {
    if (AppConfig._instance) {
      return AppConfig._instance;
    }

    this._init(env);
    AppConfig._instance = this;
  }

  private _init(env: ProcessEnv) {
    this.IS_PRODUCTION = env.NODE_ENV === 'production';
  }
}
