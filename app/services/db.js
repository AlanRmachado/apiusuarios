const sql = require('mssql');
const strConn = "Server=(local);Database=usuarios;User Id=sa;Password=sa;";
global.conn = null;

sql.connect(strConn).then(conn =>{
    global.conn = conn;
    console.log('bd ok');
})
.catch(err => console.log(err))

