require("dotenv").config();
const express = require("express");
// import database
const connectDB = require("../config/db");
// routes
const productsRoutes = require("../routes/product.routes.js");

// run db
connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);


// home page
app.get("/", (req, res) => {
  res.send("hello home page");
  res.json();
});




app.listen(process.env.PORT, () => {
  console.log(`port run on port ${process.env.PORT}`);
});
