import { Request, Response } from 'express';
export class IndexRoute {
  constructor(app: any) {
    this.routes(app);
  }
  public routes(app: any): void {
    app.route('/index').get((req: Request, res: Response) => {
      res.status(200).send({ status: 'success' });
    });
  }
}
