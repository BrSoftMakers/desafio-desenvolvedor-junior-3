![SoftMakers](https://vagas.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Dev. Fullstack Junior - Softmakers.
<div>
  <h3>Sobre o projeto</h3>
  <p>Seja bem-vindo! Esse projeto foi feito para um desafio de um processo seletivo da empresa Softmakers. O objetivo aqui era criar uma aplicação fullstack para simular um blog.</p>
</div>

<div>
  <h3>Ferramentas utilizadas</h3>
  
  <details>
    <summary><strong>Back-end</strong></summary>
    
  - <a href="https://nodejs.org/en/">Node.js<a/>
    
  - <a href="https://expressjs.com/">Express<a/>
    
  - <a href="https://sequelize.org/">Sequelize</a>
    
  - <a href="https://docs.docker.com/">Docker</a>
    
  - <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD">CRUD</a>
    
  - <a href="https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1">MSC</a>
  
  - <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST">REST</a>
    
</details>
      
<details>
  <summary><strong>Front-end</strong></summary>
  
  - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript<a/>
  
  - <a href="https://legacy.reactjs.org/docs/getting-started.html">React<a/>
  
</details>
  
<details>
  <summary><strong>Banco de dados</strong></summary>
  
  - <a href="https://dev.mysql.com/doc/">MySql<a/>
  
</details>
</div>

--------------------

<div>
  <h3>Orientações</h3>
  <details>
    <summary><strong>‼️ Como baixar o projeto e instalar suas dependências</strong></summary><br>
    
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
  <summary>:man_technologist: <strong>Populando o banco de dados</strong></summary><br>
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

--------------------

<div>
  <h3>Funcionalidades</h3>
  <details>
    <summary><strong>TELA DE LOGIN</strong></summary><br>

  - Nesta Tela usuários que já estiverem cadastrados podem se logar com seu email e senha. O botão de login fica desabilitado até que os dados sejam preenchidos corretamente.

  </details>
  
  <details>
    <summary><strong>TELA DE REGISTRO</strong></summary><br>

  - Nesta Tela usuários que ainda não estiverem cadastrados podem se cadastrar com email e senha válidos. Assim como no login o botão de cadastro fica desabilitado até que sejam preenchidos dados válidos, para isso:
    
    - o `email` deve estar em um formato válido e a `senha` deve possuir 6 caracteres ou mais.

  </details>
  
  <details>
    <summary><strong>TELA DE TODAS AS POSTAGENS</strong></summary><br>

  - Nesta Tela o usuário pode visualizar todas as postagens de todos os usuários:

  </details>
  
    
  <details>
    <summary><strong>TELA DE MINHAS POSTAGENS</strong></summary><br>
    
  - Nesta Tela o usuário pode visualizar apenas as suas postagens:

  </details>
    
  <details>
    <summary><strong>TELA DE DETALHES DE UMA POSTAGEM</strong></summary><br>

  - Nesta Tela o usuário pode visualizar detalhes de alguma postagem de seu interesse:

  - Caso o usuário seja o responsável pela postagem os botões de `editar` e `excluir` postagem ficaram habilitados:
    
  - Ao clicar em `excluir` a postagem será excluída e removida do banco de dados.

  </details>
      
  <details>
    <summary><strong>TELA DE EDITAR POSTAGEM</strong></summary><br>

  - Nesta Tela o usuário pode editar uma postagem que ele fez:

  - Ao clicar em salvar ele é redirecionado novamente para a pagina de detalhes da postagem e ela já estará com todas as modificações:

  </details>
  
  <details>
    <summary><strong>TELA DE CRIAR POSTAGEM</strong></summary><br>

  - Nesta Tela o usuário pode criar uma nova postagem:

  - Ao clicar em salvar ele é redirecionado novamente para a pagina de detalhes da nova postagem:

  </details>
    
  <details>
    <summary><strong>DETALHES ADICIONAIS</strong></summary><br>

  - Na `NAVBAR` o nome do usuário fica sempre disponível, assim como o botão de `SAIR`:

  - ao clicar em sair o usuário é redirecionado novamente para a página de login.

  </details>
</div>

--------------------

<div>
  <h3>Aprendizados</h3>
  <p>foi muito divertido fazer esté desafio e poder colocar em prática todos os meus conhecimentos. Apliquei a arquitetura MSC(model, service, controler) e fiz uma aplicação de boa usabiliade com possibilidade de escalonamento! Agradeço desde já a Softmakers pela oportuniadade de prestar esse desafio!</p>
</div>

--------------------

<div>
  <h3>Feedback</h3>
  <p>Se você tiver algum feedback, por favor deixe-me saber por meio de joaoheldermartins@hotmail.com

  ou

  https://www.linkedin.com/in/joaohelder0/</p>
</div>
