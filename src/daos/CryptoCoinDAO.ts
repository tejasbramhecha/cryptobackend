import * as mongoDB from "mongodb";
import { DatabaseConnect } from "../config/DatabaseConnect";

export class CryptoCoinDAO {
  private collections: { coins?: mongoDB.Collection } = {};

  constructor() {
    const dbInstance = new DatabaseConnect();
    this.collections = dbInstance.getCollections();
  }

  async listRates(id: string) {
    return await this.collections.coins?.find({ code: id }).sort({ _id: -1 }).limit(20).toArray();
  }
}