import express from 'express';
import { Config } from './config';
import helmet from 'helmet';
import cors from 'cors';

import { IndexRoute } from './api/routes';
export class Server {
  #port: number = Number(Config.init().api().port);
  #app!: express.Application;

  public indexRoutes!: IndexRoute;

  constructor() {
    this.createApp();
    this.configApp();
    this.indexRoutes = new IndexRoute(this.#app);
    this.runServer();
  }
  public getApp(): express.Application {
    return this.#app;
  }
  protected createApp(): void {
    this.#app = express();
  }
  protected configApp(): void {
    this.#app.use(express.json());
    this.#app.use(cors());
    this.#app.use(helmet());
  }
  protected runServer(): void {
    this.#app.listen(this.#port, () =>
      console.log('Server running in the port %s', this.#port)
    );
  }
}
