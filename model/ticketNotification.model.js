const mongoose = require("mongoose");

const ticketNotificationSchema = new mongoose.Schema({
    subject : {
        type: String,
        required: true
    },
    content : {
        type : String,
        required: true
    },
    recipientEmail : {
        type: [String],
        required : true
    },
    status :{
        type : String,
        enum : {
            values:["PENDING", "SUCCESS", "FAILED"],
            message:"INVALID STATUS."
        },
        default: "PENDING",
        required: true
    }
}, {timestamps:true});

const TicketNotification = mongoose.model(
    "TicketNotification",
    ticketNotificationSchema
);

module.exports = TicketNotification;