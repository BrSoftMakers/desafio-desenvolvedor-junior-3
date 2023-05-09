require('dotenv').config();
const reqSequelize = require('sequelize');
//conexão com o banco de dados mysql
const sequelize = new reqSequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'db', //nome do container do DB, vai pegar o IP interno pelo nome
    //host: '127.0.0.1', //usar mysql local no pc
    port: process.env.DB_DOCKER_PORT, //porta interna do container do DB (comunicação é entre containers, não entre host-container)
    dialect: 'mysql', //tipo de banco de dados
    timezone: '-03:00',
    //query:{raw:true} //se usar dá problema nos selects com relacionamento de tabelas
});

module.exports = {
    reqSequelize: reqSequelize,
    sequelize: sequelize
}