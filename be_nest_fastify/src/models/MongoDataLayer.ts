import { MongoClient } from "mongodb"

export class MongoDataLayer {
  async test() {
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb://localhost:27017/';
    const client: MongoClient = new MongoClient(uri);
    try {
      await client.connect();
      const database: any = client.db('nuxt01');
      const test_data: any = database.collection('test');
      const rows: Array<object> = await test_data.find({}, {}).toArray();
      return { rows };
    } finally {
      await client.close();
    }
    return { res: 'OK' };
  }
}