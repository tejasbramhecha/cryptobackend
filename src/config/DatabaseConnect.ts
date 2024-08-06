import * as mongoDB from "mongodb";

let collections: { coins?: mongoDB.Collection } = {}

export class DatabaseConnect {
  constructor() {}

  connectToMongoDb = async () => {
    const { databaseName, collectionName, databaseUrl } = process.env;
    if (databaseUrl && collectionName && databaseName) {
      const client: mongoDB.MongoClient = new mongoDB.MongoClient(databaseUrl);
      await client.connect();
      const db: mongoDB.Db = client.db(databaseName);
      const coinsCollection: mongoDB.Collection = await db.createCollection(collectionName);
      collections.coins = coinsCollection;
    } else {
      throw new Error("Error loading enviornment variables.");
    }
  }

  getCollections = () => {
    return collections;
  }
}