const express = require('express');
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}
const UserRouter = require('./routes/UserRouter');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', UserRouter);

module.exports = app