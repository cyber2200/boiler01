import { MongoClient } from "mongodb"

export class MongoDataLayer {
    async test() {
        const uri = "mongodb://localhost:27017/";
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db("nuxt01");
            const test_data = database.collection("test")
            const rows = await test_data.find({}, {}).toArray()
            return { rows }
        } finally {
            console.log("@@@")
            await client.close();
        }
        return {res: "OK"}
    }
}