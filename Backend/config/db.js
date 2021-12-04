// uri
require('dotenv').config()
const mongoose = require('mongoose')


const connectDB = async()=>{
     try{
         await mongoose.connect(process.env.MONGO_URI,{
            //  useNewUrlParer:true,
             useUnifiedTopology:true,
         });
         console.log("connected db"); 

     }catch(err){
         console.error(err);
         process.exit(1)
     }
} 


module.exports = connectDB; 