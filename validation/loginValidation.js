const Joi = require("joi");

module.exports.validateLoginUser = (req, res, next) => {
  const schema = Joi.object({
    user_email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(15),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  next();
};

module.exports.validateLoginDealer = (req, res, next) => {
  const schema = Joi.object({
    dealership_email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(15),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  next();
};
