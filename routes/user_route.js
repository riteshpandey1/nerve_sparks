const express = require("express");
const router = express.Router();

const userValidation = require("../validation/userValidation");
const {
  addUserData,
  readUserData,
} = require("../controller/user_controller");

const validateAddUser = require("../validation/userValidation")

router.post("/", userValidation.validateAddUser, addUserData);
router.get("/", readUserData);

module.exports = router;
