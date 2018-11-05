const jwt = require('jsonwebtoken');
const segredoJWT = require('../../config/segredo');
module.exports = (app)=>{
    auth = {
        authentication : async (req, res) =>{
            
            if(!req.headers['user'] || !req.headers['pass']){
                res.status(401).json({message : 'Usuário Não Autorizado'});
                return;
            }else{
                var user = req.headers['user'];
                var pass = req.headers['pass'];
            }

            try{                    
                const auth =  await global.conn.request().query(`select * from users where username = '${user}' and password = '${pass}'`);
             
                if(auth.recordset.length === 0){
                    res.status(401).json({auth  : false, message : 'Usuário Não Autorizado'});
               }else{
                 var id = auth.recordset[0].id_user;  
                 var token = jwt.sign({ id  }, segredoJWT, {
                    expiresIn: '300m'
                  });
                  
                  res.status(200).send({ auth: true, token: token });
               }
            
            }catch(err){
                res.status(401).json({auth  : false, message : 'Usuário Não Autorizado'});
                console.log(err);
            }    
           
           
        }
    }

    return auth;
}