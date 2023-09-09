import { DataSourceOptions } from "typeorm";

// Arquivo contendo as configurações de acesso ao banco de dados

export const ormConfig: DataSourceOptions = {
    "database": "blpvdpisjtnfbb6c13jk", // Nome do banco de dados
    "host": "blpvdpisjtnfbb6c13jk-mysql.services.clever-cloud.com", // Nome do host que esta alocado o banco de dados
    "type": "mysql", // Tipo do banco de dados 
    "port": 3306, // Porta que foi configurada para acesso ao banco de dados
    "username": "uzozut4jzpeqdwkk", // Usuario de acesso ao banco de dados insira o seu usuario de acesso
    "password": "4t5mhh2G05ssbNkCm08f",// Senha de acesso ao banco de dados insira a sua senha de acesso
    "synchronize": true,
    "entities": ["dist/**/*.model.js"]
}