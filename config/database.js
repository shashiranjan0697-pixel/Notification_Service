const mongoose = require("mongoose");
require("dotenv").config();
const mailerCron = require("../cron/crone.schedule");

async function connectDB (){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is connected to notification service.");
        mailerCron();
    }   catch (err) {
        console.log("Connection failed.");
        console.log("Error:", err);
        process.exit(1);
    }
}

module.exports = connectDB; 