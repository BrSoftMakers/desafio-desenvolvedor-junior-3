# Projeto:
Blog React + Api Nodejs

## Autor:
Luís Araújo

## Descrição: 
Esse projeto foi criado com base na proposta do desafio para a vaga de desenvolvedor jr 3 da SoftMakers.

Na proposta inclui uma api no backend que irá alimentar um blog como frontend, maiores detalhes em: github.com/BrSoftMakers/desafio-desenvolvedor-junior-3

## Sobre o projeto:
## Backend:
Desenvolvido em NodeJs, utilizando o framework Express.js, nele foi utilizado o Sequelize para gerenciar interação com o banco de dados. O banco de dados utilizado foi o MySQL.

Ele consiste em uma API que gerencia login e cadastro de usuários, nesse utilizando JWT (Json Web Token), além da gerência sobre postagens, nessa dependente de previa autorização do JWT.

## Frontend:
Desenvolvido em ReactJs, utilizando a ferramenta Vite. Ele é alimentado 100% pela API, não buscando dados em outros locais.

## Estrutura:
Tanto o backend como o frontend foram implementados utilizando Docker. O Frontend isolado e o backend comunicando internamente entre NodeJs, Mysql e phpMyAdmin (utilizado apenas para visualizar informações do bando de dados).

No MySQL foi implementada a persistência do banco de dados independendo do desligamento do container, será explicado abaixo.

## Como rodar as aplicações
## Pré-requisitos:
- NPM instalado na máquina.
- Docker instalado e ativo na máquina.

## Passos:
- Após baixar o projeto localmente, pelo terminal entrar na pasta "backend" e nela executar o comando "npm install" e em seguida "docker compose up --build", aguardar o carregamento completo do container (pode demorar um pouco devido a criação da estrutura do banco de dados, persistindo os dados em ‘backend/backend/db_data’) (deverá aparecer a mensagem "Servidor rodando em[...]", se caso a primeira execução deve aparecer também "Cadastro de postagem [...] OK")

- Após o backend rodando, em um novo terminal entrar na pasta "frontend" e nela executar o comando "npm install" e em seguida "docker compose up --build", aguardar o carregamento completo do container (deverá aparecer a mensagem "Network: http://[...]:5173/

Nesse ponto já é possível testar as aplicações:
- Frontend Blog: http://localhost:5173
- Backend API: http://localhost:3000/api/v1
- MySQL: localhost:53308
- phpMyAdmin: http://localhost:8081

## Observações
Estou enviando junto do projeto os arquivos .env, sei que não é uma boa prática, mas para teste ou entrar no mysql ou phpmyadmin o usuário e senha está no arquivo.
Foram criados junto a inicialização do banco de dados algumas postagens e usuários, vistos no arquivo backend/models/db/initDb.js (exemplo: luis@blogdoluis.com e senha de 1 a 5).