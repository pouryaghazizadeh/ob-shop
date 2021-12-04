require("dotenv").config();
// data
productsData = require("./data/products");
// db
const connectDB = require("./config/db");
// product model
const Product = require("./models/Product");
// call db
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("import data succrss");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
