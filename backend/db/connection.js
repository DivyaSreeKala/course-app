


const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.mongoDB_URL).then(()=>{//using promise async method
    console.log("connection established")
}).catch((err)=>{
    console.log(err)
})
