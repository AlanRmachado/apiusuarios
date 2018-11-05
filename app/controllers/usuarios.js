module.exports = (app) =>{
    const query = app.services.query.exec;
    const usuarios = {
        getClientes : (req, res)=>{
           if(req.params.id){
            query(`select * from users where id_user = ${req.params.id}`, res);
           }else{
            query(`select * from users`, res);
           }    
           
        },

        insertCliente : (req, res)=>{
            var username = req.body.username;
            var password = req.body.password;
            var descricao = req.body.descricao;

            var sql = `insert into users values  ('${username}','${password}', '${descricao}')`;
            
            query(sql, res);
        }, 

        updateCliente : (req, res)=>{   
            var id = req.params.id;
            var username = req.body.username;
            var password = req.body.password;
            var descricao = req.body.descricao;

            var sql = `update users set username = '${username}', password = '${password}', descricao = '${descricao}'
             where id_user = ${id}
            `;
            query(sql, res);
        },

        deleteCliente : (req, res)=>{
            var id = req.params.id;
            var sql = `delete from users where id_user = ${id}`;
            query(sql, res);
        }
    }

    return usuarios;
}