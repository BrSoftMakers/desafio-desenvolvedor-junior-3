## 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
- Typescript
- Typeorm
- Swagger

## 💻 Projeto
  Esta aplicação consiste em um blog, onde o usuario pode conversar através de posts.
## Preenchendo o .env
  Dentro do repositório vai ter um arquivo chamado de .env.example,copia tudo que tem dentro dele, agora crie um arquivo chamado de .env e preencha com as informações do seu banco criado no postgresql. <br/>
  
                  Exemplo
                  DATABASE_URL="postgres://user:password@localhost:port/db"
                  JWT_SECRET=
                  
                  user = "userPostgres"
                  password = "senhaPostgres"
                  port = "5432"
                  db = "nameDatabase"
                  JWT_SECRET = "VALOR QUE VOCÊ IRA ATRIBUIR, PODE SER QUALQUER VALOR"

## 🛠 Instalação

<h4> 📁📁 Clone este repositório<h4/>

<h4> 📁 Acesse a pasta do projeto<h4/>

<h4> 🛠 Instale as dependências<h4/>
<h6>$ yarn install<h6>

<h4> 🛞 Rode as migrações<h4/>
<h6>$ yarn typeorm migration:run -d src/database<h6/>

<h4> ▶️ Execute a aplicação em modo de desenvolvimento<h4/>
<h6>$ yarn dev<h6/>

<h4> 🤖 O servidor iniciará na porta:9000 - acesse <a href="http://localhost:9000">http://localhost:9000<a/><h4/>

  ## Deploy
  ⬆️ https://api-blog.herokuapp.com/
  
  ## 📃 Documentação
  
  <a href="http://localhost:9000/api-docs/">http://localhost:9000/api-docs/<a/> ou <a href="https://api-blog.herokuapp.com/api-docs/">https://api-blog.herokuapp.com/api-docs/<a/>
