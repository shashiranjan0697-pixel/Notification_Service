
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

module.exports = {
    create
};