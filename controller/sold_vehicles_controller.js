const { vehiclesDB } = require("../config/dbConfig");

//  Add Cars Data Into DataBase.........
const addSoldVehicleData = async (req, res, next) => {
  try {
    let result = await vehiclesDB();
    result = await result.insertOne(req.body);
    res.send({ data: result, status: 200 });
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  addSoldVehicleData,
};
