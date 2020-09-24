import express from 'express';
import { Config } from './config';

export class Server {
  #port: number = Number(Config.init().api().port);
  #app: express.Application = express();

  constructor() {
    this.createApp();
    this.runServer();
  }
  protected createApp(): void {
    this.#app = express();
  }
  protected runServer(): void {
    this.#app.listen(this.#port, () => {
      console.log('Server running in the port %s', this.#port);
    });
  }
}
