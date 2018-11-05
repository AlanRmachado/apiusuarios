module.exports = (app)=>{
    const auth = require('../middlewares/index');

    app.get('/clientes/:id?',  [auth], app.controllers.usuarios.getClientes);
    app.post('/clientes', [auth], app.controllers.usuarios.insertCliente);
    app.put('/clientes/:id?', [auth], app.controllers.usuarios.updateCliente);
    app.post('/auth',  app.controllers.auth.authentication);

}