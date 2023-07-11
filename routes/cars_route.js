const express = require("express");
const router = express.Router();

const carsValidation = require("../validation/cars_validtion");
const { addCarsData } = require("../controller/cars_controller");
const auth = require("../middleware/auth");

router.post("/", auth, carsValidation.validateAddCars, addCarsData);

module.exports = router;
