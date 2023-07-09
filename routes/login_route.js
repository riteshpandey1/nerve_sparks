const express = require("express");
const router = express.Router();
const { authDealer, authUser } = require("../controller/login_controler");

const loginValid = require("../validation/loginValidation");

router.post("/user", loginValid.validateLoginUser, authUser);
router.post("/dealer", loginValid.validateLoginDealer, authDealer);
module.exports = router;
