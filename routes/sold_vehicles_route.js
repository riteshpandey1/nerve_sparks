const express = require("express");
const router = express.Router();

const vehicleValidation = require("../validation/sold_vehicle_val");
const {
  addSoldVehicleData,
} = require("../controller/sold_vehicles_controller");

router.post("/", vehicleValidation.validateAddVehicle, addSoldVehicleData);

module.exports = router;
