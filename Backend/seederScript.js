require("dotenv").config();
// data
const productsData = require("./data/products");
const homeData = require('./data/home')

// db
const connectDB = require("./config/db");
// product model
const Product = require("./models/Product");
const Home = require('./models/Home')
// call db
connectDB();

const importData = async () => {
  try {
    // for product
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    // for home
    await Home.deleteMany({});
    await Home.insertMany(homeData);
    console.log("import data success");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
