const express = require('express'); 
const bodyParser = require('body-parser');
const blogRouter = require('./routes')

const app = express();
const port = process.env.PORT || 5000;

//rotas
app.use('/', blogRouter)

//trabalhar com formulários
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:false}));

//front-end consumindo APi do backend
app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


//back-end consumindo APi do front end
app.get('/', (req,res)=>{
    res.sendFile(__dirname + './client/src/App.js')
})
app.post('/register', (req, res)=>{
    res.write(req.body.nome);
    res.end();
})

app.listen(port, () => console.log(`Listening on port ${port}`));