var query = {
    exec :  (sqlQry, res)=>{
        global.conn.request()
                   .query(sqlQry)
                   .then(result => res.status(200).json(result.recordset))
                   .catch(err => res.status(500).json({message : 'Algo deu errado :( '+err}))
    }               
};

module.exports = query;