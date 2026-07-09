
const Ticket = require("../model/ticketNotification.model");

const create = async (req, res) =>{
    try{
        const data = await Ticket.create(req.body);

        if(!data){
            return res.status(400).json({
                success: false,
                message : "Problem in creating Ticket.",
                data : data
            });
        }

        return res.status(201).json({
            success:true,
            message: "Ticket Successfully Created.",
            data : data
        });

    }   catch(err){
        console.log(err);

        return res.status(500).json({
            success:true,
            message: err.message,
            data : err.name
        });
    }
}


const getAllTicket = async (req, res) =>{
    try{
        const data = await Ticket.find();

        if(!data){
            return res.status(400).json({
                success: false,
                message : "Problem in Fetching Ticket details.",
                data : data
            });
        }

        return res.status(200).json({
            success:true,
            message: "Ticket Successfully fetched.",
            data : data
        });        

    }   catch(err){
        console.log(err);

        return res.status(500).json({
            success:true,
            message: err.message,
            data : err.name
        });
    }
}


const getById = async (req, res) =>{
    try{
        if(!req.params.ticketId){
            return res.status(400).json({
                success: false,
                message : "TicketId is not Provided.",
                err : "Malformed request"
            });
        }

        const data = await Ticket.findById(req.params.ticketId);

        if(!data){
            return res.status(404).json({
                success: false,
                message : "Please enter valid ticketId",
                err : "Ticket is not fount with given TicketId."
            });
        }

        return res.status(200).json({
            success:true,
            message: "Ticket Successfully fetched.",
            data : data
        }); 

    }   catch(err){
        console.log(err);

        return res.status(500).json({
            success:true,
            message: err.message,
            data : err.name
        });
    }
}


module.exports = {
    create,
    getAllTicket,
    getById
};