const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

// Database Name
const dbName = "nerve-sparks-dealership";

async function dealDB() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  return db.collection("deal");
}

module.exports = { dealDB };
