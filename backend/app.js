//importações
require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
const initdb = require('./models/db/initDb')
const routeBlog = require('./routers/blog')
const routeAuth = require('./routers/auth')
const cors = require('cors')

//configurações
const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//inicializar banco de dados
initdb.inicializarDb();

app.use(cors())

app.use((req, res, next) => {
    //permitir solicitação de origem cruzada CORS
    res.setHeader('Access-Control-Allow-Origin', '*')
    //métodos permitidos nas solicitações
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //solicitações de cabeçalhos permitidas
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, application/json')
    //se true permite que o site inclua cookies nas solicitações enviadas, para api se usar sessões
    res.setHeader('Access-Control-Allow-Credentials', true)
    //continuar
    next()
})

//rotas
app.use('/api/v1/', routeBlog)
app.use('/api/v1/auth', routeAuth)

// //credenciais mongo
// const dbUser = process.env.DB_USER
// const dbPass = process.env.DB_PASS
// const dbHost = process.env.DB_HOST
// const dbPort = process.env.DB_PORT
// const dbName = process.env.DB_NAME
// const dbUrl = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}`

// //conectando e abrindo servidor
// mongoose.connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: dbName,
// })
// .then(()=>{
//     app.listen(3000)
//     console.log("Conectado ao banco.")
// })
// .catch((error)=>{
//     console.log(error)
// })

//abrir servidor
app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log('Servidor rodando em: localhost:' + process.env.NODE_LOCAL_PORT);
})