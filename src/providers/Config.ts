import { IApiConfig, IAppConfig, IConfig, IHttpConfig, ILoggerConfig, ISwaggerConfig } from '../types/config';
import { AppConfig } from '../configurations/App';
import { ApiConfig } from '../configurations/Api';
import { HttpConfig } from '../configurations/Http';
import { LoggerConfig } from '../configurations/Logger';
import { SwaggerConfig } from '../configurations/Swagger';
export class Config implements IConfig {
  public static _instance: Config | undefined;
  public AppConfig!: IAppConfig;
  public ApiConfig!: IApiConfig;
  public HttpConfig!: IHttpConfig;
  public LoggerConfig!: ILoggerConfig;
  public SwaggerConfig!: ISwaggerConfig;

  constructor() {
    if (Config._instance) {
      return Config._instance;
    }

    const env = process.env;

    this.AppConfig = new AppConfig(env);
    this.ApiConfig = new ApiConfig(env);
    this.HttpConfig = new HttpConfig(env);
    this.LoggerConfig = new LoggerConfig(env);
    this.SwaggerConfig = new SwaggerConfig(env, this);

    Config._instance = this;
  }
}
