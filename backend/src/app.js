import express from 'express';
import bodyParser from 'body-parser';
//Rotas
import homeRouter from './routes/homeLogin.js';
import cadastroRouter from './routes/cadastro.js';

const app = express();

//Rotas Especificas
app.use(bodyParser.json());
app.use('/home-login', homeRouter);
app.use('/cadastro', cadastroRouter);

export default app;