const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductsById,
} = require("../controller/productControllers");

//@ desc Get all products from db
//@ route Get /api/products
//@ access public 
router.get("/", getAllProducts);

//@ desc Get  a products by id from db
//@ route Get /api/products/:id
//@ access public
router.get("/:id", getProductsById);



module.exports = router;
