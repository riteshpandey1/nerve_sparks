const { carsDB, dealershipDB } = require("../config/dbConfig");
// const dealershipDB = require("../config/dbConfig");
const ObjectId = require("mongodb").ObjectId;

//  Add Cars Data Into DataBase.........
const addCarsData = async (req, res, next) => {
  try {
    let db = await carsDB();
    let result = await db.insertOne(req.body);

    (await dealershipDB()).updateOne(
      { _id: req.params.tenant },
      { $addToSet: { cars: result?.insertedId } }
    );
    res.send({ data: result, status: 200 });
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  addCarsData,
};
