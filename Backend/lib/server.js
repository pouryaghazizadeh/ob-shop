require("dotenv").config()
const express = require('express')
// import database
const connectDB = require('../config/db')


// run db
connectDB()



const app = express()

const PORT = process.env.PORT || 6600
app.listen(PORT,()=>{
    console.log(`port run on port ${PORT}`);
})