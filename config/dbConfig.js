const { MongoClient, ServerApiVersion } = require("mongodb");
let db;
//const url = `mongodb://localhost:27017/`;
const uri = "mongodb+srv://pritesh:1234@mydb.zw1bphk.mongodb.net";
const client = new MongoClient(uri, {
  // serverApi: {
  //   version: ServerApiVersion.v1,
  //   strict: true,
  //   deprecationErrors: true,
  // }
});

module.exports.dbConnect = async () => {
  try {
    await client.connect();
    db = client.db("nerve-sparks-dealership");

    console.log("Connected successfully to server");
  } catch (error) {
    console.log(error);
  }
};
module.exports.userDB = () => {
  return db.collection("user");
};

module.exports.vehiclesDB = () => {
  return db.collection("sold_vehicles");
};

module.exports.dealershipDB = () => {
  return db.collection("dealership");
};

module.exports.carsDB = () => {
  return db.collection("cars");
};

module.exports.dealDB = () => {
  return db.collection("deal");
};
