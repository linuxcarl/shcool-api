import * as dotenv from 'dotenv';
import { Iapi } from './interfaces/api.interface';
dotenv.config();
export class Config {
  private static instance: Config;
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
  public api(): Iapi {
    return {
      port: process.env.PORT || 3000,
      cors: process.env.CORS || '*',
    };
  }
}
