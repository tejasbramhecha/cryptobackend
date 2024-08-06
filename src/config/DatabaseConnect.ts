import * as mongoDB from "mongodb";

let collections: { coins?: mongoDB.Collection } = {}

export class DatabaseConnect {
  constructor() {}

  connectToMongoDb = async () => {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb://localhost:27017/");
    await client.connect();
    const db: mongoDB.Db = client.db("FomoFactory");
    const coinsCollection: mongoDB.Collection = await db.createCollection("coins");
    collections.coins = coinsCollection;
  }

  getCollections = () => {
    return collections;
  }
}