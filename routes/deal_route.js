const express = require("express");
const router = express.Router();

const dealValidation = require("../validation/deal_validation");
const { addDealData } = require("../controller/deal_controller");

router.post("/", dealValidation.validateAddDeal, addDealData);

module.exports = router;
