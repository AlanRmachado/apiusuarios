const app = require('./config/express')();

app.listen(app.get('port'), ()=>{
    console.log('servidor rodando');
})