![SoftMakers](https://vagas.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Dev Fullstack Junior - Softmakers.
<div>
  <h3>Sobre o projeto</h3>
  <p>Seja bem-vindo! Esse projeto foi feito para um desafio de um processo seletivo da empresa Softmakers. O objetivo aqui era criar uma aplicação fullstack para simular um blog.</p>
</div>

<div>
  <h3>Ferramentas utilizadas</h3>
 
  **Back-end:**
  
  <ul>
    <li><a href="https://nodejs.org/en/">Node.js<a/></li>
    <li><a href="https://expressjs.com/">Express<a/></li>
    <li><a href="https://sequelize.org/">Sequelize</a></li>
    <li><a href="https://docs.docker.com/">Docker</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD">CRUD</a></li>
    <li><a href="https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1">MSC</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST">REST</a></li>
  </ul>
  
   **Front-end:**
  
  <ul>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript<a/></li>
    <li><a href="https://legacy.reactjs.org/docs/getting-started.html">React<a/></li>
  </ul>
  
   **Banco de dados:**
  
  <ul>
    <li><a href="https://dev.mysql.com/doc/">MySql<a/></li>
  </ul>
</div>

---------------------------------------

<div>
  <h3>Orientações</h3>
  <details>
    <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br>
    
  1. Clone o repositório
    
  - `git clone git@github.com:J0a0Helder/desafio-desenvolvedor-junior-3-softmakers.git`
  
  - Entre na pasta que foi criada no processo de clonagem:
    - `cd desafio-desenvolvedor-junior-3-softmakers`
  
  2. Faça a instalação das dependências
  
  - `npm install` ou `npm i`
  </details>
</div>

<div>
  <details>
  <summary>:whale: <strong>Rodando via Docker</strong></summary><br>
 
  <p>Está é uma aplição que utiliza docker, então na raiz do projeto:</p>
    
  - rode o seguinte comando:
  
    - `npm run compose:up`
    
  - Se não for mais usar os containers, rode o seguinte comando:
  
    - `npm run compose:down`
  </details>
</div>

<div>
  <details>
  <summary>:man_technologist: <strong>preenchendo o banco de dados</strong></summary><br>
  <p>Está é uma aplicação que utiliza o ORM sequelize, então para popular o banco de dados com alguns dados de teste:</p>
    
  - se ainda estiver na raiz do projeto rode o comando para entrar na pasta backend:
  
    - `cd backend`
    
  - Dentro da pasta backend utilize o seguinte comando para popular o banco de dados:
  
    - `npm run db:reset`
    
  - Agora utilize o seguinte comando para deixar seu backend up:
  
    - `npm run dev`
    
 ⚠️ **Importante**: caso encontre o seguinte erro:

![image](https://github.com/J0a0Helder/desafio-desenvolvedor-junior-3-softmakers/assets/106708779/f6428e3e-6b36-4ee8-a01b-cede4f2f7edf)

 Isso significa que a porta 3001 já está em uso, você pode usar o comando: `` sudo kill -9 `sudo lsof -t -i:3001` `` para limpar a porta e todar novamente o comando `npm run dev`
  </details>
</div>

<div>
  <details>
  <summary>:globe_with_meridians: <strong>Utilizando a aplicação</strong></summary><br>
  <p>Se tudo deu certo agora você pode acessar: <strong>localhost:3000/</strong> no seu navegador e utilizar a aplicação :grin:</p>
  </details>
</div>
