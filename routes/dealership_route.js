const express = require("express");
const router = express.Router();

const dealershipValidation = require("../validation/dealershipVal");
const {
  addDealershipData,
  readDealershipData,
} = require("../controller/dealership_con");

router.post("/", dealershipValidation.validateAddDealership, addDealershipData);
router.get("/", readDealershipData);

module.exports = router;
