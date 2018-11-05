const jwt = require('jsonwebtoken');
const segredoJWT = require('../../config/segredo');
const auth = (req, res, next)=>{
    if(req.headers['token']){
        var token = req.headers['token'];
    }else{
        res.json({message : 'Acesso Banido'})
        return;
    }
    console.log(token)
    jwt.verify(token, segredoJWT, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
      });
}
module.exports = auth;