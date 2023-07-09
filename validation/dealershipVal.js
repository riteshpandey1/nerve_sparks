const Joi = require("joi");
// Joi.objectId = require("joi-objectid")(Joi);

module.exports.validateAddDealership = (req, res, next) => {
  const schema = Joi.object({
    dealership_email: Joi.string().email().required(),
    dealership_name: Joi.string().required().min(5).max(30),
    dealership_location: Joi.string().required().min(2).max(30),
    password: Joi.string().required().min(8).max(15),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  next();
};
