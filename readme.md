# ![image](https://user-images.githubusercontent.com/71836298/205188842-9bb9541e-c043-4c38-b817-c84c72485ee4.png)  Rodando o Backend(Node.js)


## 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
- Typescript
- Typeorm
- Swagger
- Docker

## 💻 Projeto
  Esta aplicação consiste em um blog, onde o usuario pode criar varios post e visualiar posts de outras pessoas.

## 🛠 Instalação

<h4> 📁📁 Clone este repositório<h4/>

<h4> 📁 Acesse a pasta do projeto<h4/>

<h4> 🛠 Instale as dependências<h4/>
<h6>$ yarn install<h6>

## Preenchendo o .env
  Dentro do repositório vai ter um arquivo chamado de .env.example,copia tudo que tem dentro dele, agora crie um arquivo chamado de .env e preencha com as informações do banco que será criado no docker-compose . <br/>
  
                  Exemplo
                  DATABASE_URL="postgres://user:password@localhost:port/db"
                  JWT_SECRET=
                  
                  user = "userPostgres"
                  password = "senhaPostgres"
                  db = "nameDatabase"
                  JWT_SECRET = "VALOR QUE VOCÊ IRA ATRIBUIR, PODE SER QUALQUER VALOR"
                  
                  POSTGRES_USER="userPostgres"
                  POSTGRES_PASSWORD="senhaPostgres"
                  POSTGRES_DB="nameDatabase"
                  
<h4> 💻 Criando o banco de dados <h4/>
<h6> docker-compose up <h6/>                  


<h4> 🛞 Rode as migrações<h4/>
<h6>$ yarn typeorm migration:run -d src/database<h6/>

<h4> ▶️ Execute a aplicação em modo de desenvolvimento<h4/>
<h6>$ yarn dev<h6/>

<h4> 🤖 O servidor iniciará na porta:9000 - acesse <a href="http://localhost:9000">http://localhost:9000<a/><h4/>

  ## Deploy
  ⬆️ https://api-blog.herokuapp.com/
  
  ## 📃 Documentação
  
  <a href="http://localhost:9000/api-docs/">http://localhost:9000/api-docs/<a/> ou <a href="https://api-blog.herokuapp.com/api-docs/">https://api-blog.herokuapp.com/api-docs/<a/>
