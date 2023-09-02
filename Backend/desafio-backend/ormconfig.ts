import { DataSourceOptions } from "typeorm";

// Arquivo contendo as configurações de acesso ao banco de dados

export const ormConfig: DataSourceOptions = {
    "database": "desafio_junior_3", // Nome do banco de dados
    "host": "localhost", // Nome do host que esta alocado o banco de dados
    "type": "mysql", // Tipo do banco de dados 
    "port": 3306, // Porta que foi configurada para acesso ao banco de dados
    "username": "root", // Usuario de acesso ao banco de dados insira o seu usuario de acesso
    "password": "root",// Senha de acesso ao banco de dados insira a sua senha de acesso
    "synchronize": true,
    "entities": ["dist/**/*.model.js"]
}