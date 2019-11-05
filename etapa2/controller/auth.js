const jwt = require('jsonwebtoken');
const uname = "ccuffs";
const pword = "sacc2019";
const secret = "sacc2019ccuffs";

var gerar_jwt =  (req, res) => {
    var { username,password } = req.body; 
    
    if(username != uname || password != pword){
        return res.status(401).send({
            error: "AutenticacaoInvalida"
        })
    }
    var tokenData = {
        username: username
    }

    var token = jwt.sign(tokenData, secret);

    res.send({
        token: "Bearer " + token
    });
}

module.exports = {
    gerar_jwt
}