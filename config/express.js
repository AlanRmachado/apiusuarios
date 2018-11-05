const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');


module.exports = ()=>{
    const app = express();
    
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(bodyParser.json());
    
    app.set('port', 3000);
    app.set('chaveJWT', 'q%.V<d?mAq3_?Jt~9k{9YSNGA&;#d9Lw43/#FP`C8vw<Y');

    app.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();
      });

    load('services', {cwd : 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
}