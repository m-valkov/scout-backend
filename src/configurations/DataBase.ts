import { IDbConfig, ProcessEnv } from '../types/config';

export class DbConfig implements IDbConfig {
  private static _instance: DbConfig;
  MONGO_DB_URI!: string;
  constructor(env: ProcessEnv) {
    if (DbConfig._instance) {
      return DbConfig._instance;
    }
    this._init(env);
    DbConfig._instance = this;
  }

  private _init(env: ProcessEnv) {
    this.MONGO_DB_URI = env.MONGO_DB_URI || '';
  }
}
