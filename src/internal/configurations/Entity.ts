import { IEntityConfig, ProcessEnv } from '../types/config';

export class EntityConfig implements IEntityConfig {
  private static _instance: EntityConfig;
  public USER_LOGIN_MIN_LENGTH!: number;
  public USER_LOGIN_MAX_LENGTH!: number;
  public USER_PASSWORD_MIN_LENGTH!: number;
  public USER_PASSWORD_MAX_LENGTH!: number;
  constructor(env: ProcessEnv) {
    if (EntityConfig._instance) {
      return EntityConfig._instance;
    }
    this._init(env);
    EntityConfig._instance = this;
  }

  private _init(env: ProcessEnv) {
    this.USER_LOGIN_MIN_LENGTH = Number(env.USER_LOGIN_MIN_LENGTH) || 1;
    this.USER_LOGIN_MAX_LENGTH = Number(env.USER_LOGIN_MAX_LENGTH) || 32;
    this.USER_PASSWORD_MIN_LENGTH = Number(env.USER_PASSWORD_MIN_LENGTH) || 10;
    this.USER_PASSWORD_MAX_LENGTH = Number(env.USER_PASSWORD_MAX_LENGTH) || 128;
  }
}
