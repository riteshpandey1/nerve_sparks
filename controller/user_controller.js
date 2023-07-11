const { userDB } = require("../config/dbConfig");

//  Add User Data Into DataBase.........
const addUserData = async (req, res, next) => {
  try {
    let result = await userDB();
    const checkedEmail = await result.findOne({
      user_email: req.body.user_email,
    });
    if (checkedEmail && checkedEmail.user_email) {
      return res
        .status(404)
        .send({ message: "Email is already Exists!", status: 404 });
    } else {
      result = await result.insertOne(req.body);
      result = await userDB().findOne(
        { _id: result?.insertedId },
        { projection: { password: 0 } }
      );
      res.send({ data: result, status: 200 });
    }
  } catch (ex) {
    next(ex);
  }
};

//  Read User Data From DataBase.........
const readUserData = async (req, res) => {
  try {
    let result = await userDB.find({ _id: req.params.id });
    if (!result)
      return res.status(404).send({ message: "User not found!", status: 404 });
    res.send({ data: result, status: 200 });
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  addUserData,
  readUserData,
};
