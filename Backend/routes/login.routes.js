const express = require("express");

const router = express.Router();
const loginUserController = require('../controller/loginControllers')
router.post("/",loginUserController.loginUser);

module.exports = router;
