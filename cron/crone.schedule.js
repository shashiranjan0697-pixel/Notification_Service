const cron = require("node-cron");
const Ticket = require("../model/ticketNotification.model");
const mailer = require("../service/nodemailer.service")

const mailerCron = () => {
    cron.schedule("*/2 * * * *", async () => {

        console.log("Cron execuition started.")

        const notifications = await Ticket.find({
            status:"PENDING"
        });

        notifications.forEach(notification => {
            const mailData = {
                from : "shashiranjan0697@gmail.com",
                to : notification.recipientEmail,
                subject : notification.subject,
                text : notification.content
            };
            console.log("Notifications:", notifications);
            console.log("MailData : ", mailData);
 

            mailer.sendMail(mailData, async (err, data) =>{
                if(err){
                    console.log("Error : ", err);
                } else {
                    console.log("Data : ", data);

                    notification.status = "SUCCESS";
                    await notification.save();
                    console.log("Notifications:", notifications);
                }
            })
        });
    })

};

module.exports = mailerCron;