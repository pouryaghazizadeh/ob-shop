require("dotenv").config();
const express = require("express");
// import database
const connectDB = require("../config/db");
// routes
const productsRoutes = require("../routes/product.routes.js");
const homeRoutes = require("../routes/home.routes");
// run db
connectDB();

const app = express();

app.use(express.json());
// define routes
// note /api/ =>that means api and in the routs file / this means endpoint
app.use("/api/products", productsRoutes);
app.use("/api/", homeRoutes);



app.listen(process.env.PORT, () => {
  console.log(`port run on port ${process.env.PORT}`);
});
