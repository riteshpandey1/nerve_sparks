const { dealershipDB } = require("../config/dbConfig");

//  Add Dealership Data Into DataBase.........
const addDealershipData = async (req, res, next) => {
  try {
    let result = await dealershipDB();
    const checkedEmail = await result.findOne({
      dealership_email: req.body.dealership_email,
    });

    if (checkedEmail && checkedEmail.dealership_email) {
      return res
        .status(404)
        .send({ message: "Email is already Exists!", status: 404 });
    } else {
      let result = await dealershipDB();
      result = await result.insertOne(req.body);

      result = await dealershipDB().findOne(
        { _id: result?.insertedId },
        { projection: { password: 0 } }
      );
      res.send({ data: result, status: 200 });
    }
  } catch (ex) {
    next(ex);
  }
};

//  Read Dealership Data From DataBase.........
const readDealershipData = async (req, res, next) => {
  try {
    let result = await dealershipDB();
    result = await result.find({});
    if (!result)
      return res
        .status(404)
        .send({ message: "Dealer not found!", status: 404 });
    res.send({ data: result, status: 200 });
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  addDealershipData,
  readDealershipData,
};
