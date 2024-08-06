import { type Express } from 'express';
import { CryptoCoinCrontroller } from '../controllers/CryptoCoinController';

export class CryptoCoinRoutes {
  private app: Express;
  
  constructor(app: Express) {
    this.app = app;
    this.configureRoutes();
  }

  configureRoutes(): void {
    const cryptoCoinController = new CryptoCoinCrontroller();

    this.app
      .route('/coin/:id')
      .get((req, res) => 
        cryptoCoinController.listRates(req, res));
  }
}