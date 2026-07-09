const express = require("express");
const router = express.Router();


const ticketController = require("../controller/ticket.controller");
const ticketMiddleware = require("../middleware/ticket.middleware");

router.post("/notification",
        ticketMiddleware.validateTicket,
        ticketController.create
    );


module.exports = router;
