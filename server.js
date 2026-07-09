const express = require("express");
require("dotenv").config();

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = require("./config/database")


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();



const port = 3000 || process.env.PORT;

app.listen(port , () =>{
    console.log(`Notification Server successfully hosted on port : ${port}`);
})
