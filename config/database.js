const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB (){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is connected to notification service.");
    }   catch (err) {
        console.log("Connection failed.");
        console.log("Error:", err);
        process.exit(1);
    }
}

module.exports = connectDB; 