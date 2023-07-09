const { dealDB } = require("../db/deal");

//  Add Cars Data Into DataBase.........
const addDealData = async (req, res, next) => {
  try {
    let result = await dealDB();
    result = await result.insertOne(req.body);
    res.send({ data: result, status: 200 });
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  addDealData,
};
