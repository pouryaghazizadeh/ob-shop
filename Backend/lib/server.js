require("dotenv").config()
const express = require('express')
// import database
const connectDB = require('../config/db')
// routes
const productsRoutes = require("../routes/productRoutes.js")

// run db
connectDB()



const app = express()

app.use(express.json())
app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 6600
app.listen(PORT,()=>{
    console.log(`port run on port ${PORT}`);
})