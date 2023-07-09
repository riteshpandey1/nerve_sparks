const Joi = require("joi");

module.exports.validateAddCars = (req, res, next) => {
  const schema = Joi.object({
    type: Joi.string().required().min(5).max(20),
    name: Joi.string().required().min(2).max(30),
    model: Joi.string().required().min(2).max(30),
    car_info: Joi.string().required().min(8).max(15),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  next();
};
