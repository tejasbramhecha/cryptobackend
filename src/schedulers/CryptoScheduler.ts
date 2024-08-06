import axios from "axios";
import { CronJob } from 'cron';
import * as mongoDB from "mongodb";
import { DatabaseConnect } from '../config/DatabaseConnect';
import { CryptoCoinModel } from "../model/CryptoCoinModel";

export class CryptoScheduler {
  private collections: { coins?: mongoDB.Collection } = {}
  private cryptoCodes: Array<string>;

  constructor() {
    const dbInstance = new DatabaseConnect();
    this.collections = dbInstance.getCollections();
    this.cryptoCodes = ['BTC', 'ETH', 'LTC', 'XRP', 'BCH'];
  }

  addCryptoScheduler = () => {
    new CronJob(
      '*/2 * * * *',
      () => {
        this.cryptoCodes.forEach(async (code) => {
          console.log("Started running a cron job.");
          await this.getCryptoCurrency(code);
        });
      },
      null,
      true
    );
  }

  getCryptoCurrency = (cryptoCode: string) => {
    axios({
      method: 'post',
      url: `${process.env.liveCoinWatchHost}/coins/single`,
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.liveCoinWatchAPIKey
      },
      data: JSON.stringify({
        "currency": "USD",
        "code": cryptoCode,
        "meta": false
      })
    }).then(async (response) => {
      const cryptoData: CryptoCoinModel = response.data;
      cryptoData.code = cryptoCode;
      await this.collections.coins?.insertOne(cryptoData);
    }).catch((err) => {
      console.error("Error occurred while fetching crypto rates: ", err);
    });
  }
}