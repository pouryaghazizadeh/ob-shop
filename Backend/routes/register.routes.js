const express = require("express");
const router = express.Router();

const registerController = require("../controller/registerControllers");

router.post("/", registerController.registerUser);


module.exports = router;
