const express = require("express");
require("dotenv").config();

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = require("./config/database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ticketRouter = require("./route/ticket.route");
const mailerCron = require("./cron/crone.schedule");

app.use("/noticeservice/api/v1", ticketRouter);



connectDB();

const port = 3000 || process.env.PORT;

app.listen(port , async () =>{
    
    // mailerCron();

    console.log(`Notification Server successfully hosted on port : ${port}`);
    
});
