import express from 'express';
import { Config } from './config';
import helmet from 'helmet';
import cors from 'cors';

import { IndexRoute } from './api/routes';
export class Server {
  #port: number = Number(Config.init().api().port);
  #app!: express.Application;

  #indexRoutes!: IndexRoute;

  constructor() {
    this.createApp();
    this.configApp();
    this.#indexRoutes = new IndexRoute(this.#app);
    this.runServer();
  }
  public getApp(): express.Application {
    return this.#app;
  }
  private createApp(): void {
    this.#app = express();
  }
  private configApp(): void {
    this.#app.use(express.json());
    this.#app.use(cors());
    this.#app.use(helmet());
  }
  private runServer(): void {
    this.#app.listen(this.#port, () =>
      console.log('Server running in the port %s', this.#port)
    );
  }
}
