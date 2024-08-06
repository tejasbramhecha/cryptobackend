import { Request, Response } from 'express';
import { CryptoCoinDAO } from '../daos/CryptoCoinDAO';

export class CryptoCoinCrontroller {
  private cryptoCoinDAO;
  private cryptoCodes: Array<string>;

  constructor() {
    this.cryptoCoinDAO = new CryptoCoinDAO();
    this.cryptoCodes = ['BTC', 'ETH', 'LTC', 'XRP', 'BCH'];
  }

  listRates = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params['id'];
      const index = this.cryptoCodes.findIndex(el => el === id);
      if (index !== -1) {
        const result = await this.cryptoCoinDAO.listRates(id);
        res.status(200).send(result);
      } else {
        res.status(400).send({ error: 'Invalid crypto code.' });
      }
    } catch (err) {
      res.status(500).send({ error: 'An error occurred while fetching rates.' });
    }
  }
}