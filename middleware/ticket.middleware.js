
const validateTicket = async (req, res, next) =>{

    if(!req.body.subject){
        return res.status(400).json({
            success:false,
            message : "Please enter Subject.",
            err : "Bad request."
        });
    }

    if(!req.body.content){
        return res.status(400).json({
            success:false,
            message : "Please enter content.",
            err : "Bad request."
        });
    }

    if(!req.body.recipientEmail || req.body.recipientEmail.length  === 0){
        return res.status(400).json({
            success:false,
            message : "Please enter Recipient Email.",
            err : "Bad request."
        });
    }

    next();

}

module.exports = {
    validateTicket
}