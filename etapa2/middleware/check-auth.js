
const jwt = require('jsonwebtoken');
const secret = "sacc2019ccuffs";

module.exports = (req,res,next) =>{
    try{
        
        const token = req.headers.authorization.split(" ")[1];
        const content = jwt.verify(token, secret);

        req.body.username = content.username;
        
        next();
    } catch(error){
        console.log(error);
        return res.status(401).send({
            error: "Auth failed"
        })
    }

};