const jwt = require("jsonwebtoken");
const { userDB } = require("../db/user");
const dealershipDB = require("../db/dealership");

const authUser = async (req, res, next) => {
  try {
    const user = await (await userDB()).findOne({
        user_email: req.body.user_email,
        password: req.body.password,
    });
    if (!user) return res.status(400).send({ message: "User not found!",staus:404 });
    let token = jwt.sign({_id:user?._id},'jwt4375365@#$$');
    res.send({ data: {token}, status: 200 });
  } catch (ex) {
    next(ex);
  }
};


const authDealer = async (req, res, next) => {
  try {
    const dealer = await (await dealershipDB()).findOne({
        dealership_email: req.body.dealership_email,
        password: req.body.password,
    });
    if (!dealer) return res.status(400).send({ message: "Dealer not found!",staus:404 });
    let token = jwt.sign({_id:dealer?._id},'jwt4375365%%@#$$');
    res.send({ data: {token}, status: 200 });
  } catch (ex) {
    next(ex);
  }
};
module.exports = {
  authDealer: authDealer,
  authUser: authUser,
};
