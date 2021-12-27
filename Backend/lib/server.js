require("dotenv").config();
const express = require("express");
const cors  = require('cors')
// import database
const connectDB = require("../config/db");
// routes
const productsRoutes = require("../routes/product.routes.js");
const homeRoutes = require("../routes/home.routes");
const registerRouter = require("../routes/register.routes");
const loginRouter = require("../routes/login.routes");
// run db
connectDB();

const app = express();
app.use(express.json());
app.use(cors())
// define routes
// note /api/ =>that means api and in the routs file / this means endpoint
app.use("/api/", homeRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/login", loginRouter);
app.use("/api/register", registerRouter);
app.use("/api/delete", registerRouter);

app.listen(process.env.PORT, () => {
  console.log(`port run on port ${process.env.PORT}`);
});
