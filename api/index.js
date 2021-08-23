const express = require('express')
const app = express()
const dotenv = require('dotenv')//organização
const mongoose = require('mongoose')//conectar o mongoDB com o backend
const authRoute = require('./routes/auth')//rotas
const usersRoute = require('./routes/users')//rotas
const postsRoute = require('./routes/posts')//rotas
const categoryRoute = require('./routes/categories')//rotas
const multer = require('multer')//é utilizado para trabalhar com imagens


dotenv.config();
app.use(express.json());//usar as transferencias de dados em JSON

mongoose.connect(process.env.MONGO_URL, {//conectando o mongDB
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('Connect to mongo')).catch(err => console.log(err));

const storage = multer.diskStorage({//salvando a imagens
    destination:(req, file, cb) =>{
     cb(null, 'images')//na pasta images   
    },
    filename:(req, file, cb)=>{
        cb(null, req.body.name)
    }
})

const upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'), (req, res)=>{//carregando uma imagem(.single) e terá o seu próprio nome:"file"
    res.status(200).json('Imagem foi carregada')
})

app.use('/api/auth', authRoute)//utilizando as rotas assim q chamadas
app.use('/api/users', usersRoute)//utilizando as rotas assim q chamadas
app.use('/api/posts', postsRoute)//utilizando as rotas assim q chamadas
app.use('/api/categories', categoryRoute)//utilizando as rotas assim q chamadas

app.listen('5000' , () =>{
    console.log('running...');
})