const Joi = require("joi");

module.exports.validateAddVehicle = (req, res, next) => {
  const schema = Joi.object({
    vehicle_info: Joi.string().required().min(5).max(25),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  next();
};
