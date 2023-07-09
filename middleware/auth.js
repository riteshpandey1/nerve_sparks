const jwt = require("jsonwebtoken");
const dealershipDB = require("../db/dealership");
const ObjectId = require('mongodb').ObjectId;

module.exports = async (req, res, next) => {
    const token = req.header("token");
  if (!token)
    return res
      .status(401)
      .send({ message: "Access Denied! No Token Provided" ,status:401});
  try {
    const decoded = jwt.verify(token, 'jwt4375365%%@#$$');
   
    const dealer = await (await dealershipDB()).findOne({
        _id:  new ObjectId(decoded?._id),
       
    });
    if (!dealer) return res.status(404).send({ message: "Dealer Not Found!",status:404 });
    req.params.tenant = dealer?._id;

    next();
  } catch (ex) {
    res.status(401).send({message:"Invalid Token"});
  }
};
