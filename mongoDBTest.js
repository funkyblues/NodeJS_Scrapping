const mongo = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    const db = await client.db("kennel");
    const collection = await db.collection("dogs");
    await collection.insertOne({ name: "Roger" }, (err, result) => {});
    await collection.insertMany(
      [{ name: "Togo" }, { name: "Syd" }],
      (err, result) => {}
    );

    collection.find().toArray((err, items) => {
      console.log(items);
    });
  }
);
