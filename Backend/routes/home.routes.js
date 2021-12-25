const express = require("express");
const router = express.Router();

const getHome = require('../controller/homeControllers')
//@ desc Get home data from db
//@ route Get /api/home
//@ access public 
router.get("/api", getHome);
module.exports = router;