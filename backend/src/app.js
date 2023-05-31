const express = require('express');
const bodyParser = require('body-parser');
//Rotas
const homeRouter = require('./routes/homeLogin.js');
const cadastroRouter = require('./routes/cadastro.js');
const feedRouter = require('./routes/feed.js');

const app = express();

//Rotas Especificas
app.use(bodyParser.json());
app.use('/home-login', homeRouter);
app.use('/cadastro', cadastroRouter);
app.use('/feed', feedRouter);

module.exports = app;