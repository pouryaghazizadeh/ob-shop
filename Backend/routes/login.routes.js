const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const loginUserController = require("../controller/loginControllers");
router.post("/", loginUserController.loginUser);
// router.delete("/delete", auth, loginUserController.deleteUser);
module.exports = router;
