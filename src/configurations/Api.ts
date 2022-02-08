import { IApiConfig, ProcessEnv } from '../types/config';

export class ApiConfig implements IApiConfig {
  private static _instance: ApiConfig;
  public API_PREFIX!: string;
  constructor(env: ProcessEnv) {
    if (ApiConfig._instance) {
      return ApiConfig._instance;
    }
    this._init(env);
    ApiConfig._instance = this;
  }
  private _init(env: ProcessEnv) {
    this.API_PREFIX = env.API_PREFIX || '/api';
  }
}
