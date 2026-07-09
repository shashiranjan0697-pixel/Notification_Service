const express = require("express");
require("dotenv").config();

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = require("./config/database");
const transporter = require("./service/nodemailer.service");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ticketRouter = require("./route/ticket.route");

app.use("/noticeservice/api/v1", ticketRouter);



connectDB();

const port = 3000 || process.env.PORT;

app.listen(port , async () =>{
    console.log(`Notification Server successfully hosted on port : ${port}`);
    // try {
    // const info = await transporter.sendMail({
    //     from: 'shashiranjan0697@gamil.com', // sender address
    //     to: "sudhanshukr0339@gmail.com", // list of recipients
    //     subject: "Hello", // subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // HTML body
    // });

    // console.log("Message sent: %s", info.messageId);
    // // Preview URL is only available when using an Ethereal test account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // } catch (err) {
    // console.error("Error while sending mail:", err);
    // }

    // transporter.verify((error, success) => {
    //     if (error) {
    //         console.error("Error: ",error);
    //     } else {
    //         console.log("SMTP server is ready.");
    //     }
    // });

});
