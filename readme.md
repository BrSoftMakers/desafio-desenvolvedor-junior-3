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

  - Nesta Tela usuários que já estiverem cadastrados podem se logar com seu email e senha. O botão de login fica desabilitado até que os dados sejam preenchidos corretamente:
    
  ![Captura de tela de 2023-06-09 14-39-15](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/a1e7bba9-7d84-4320-a560-d39f8e886f53)
    
  ![Captura de tela de 2023-06-09 14-43-39](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/3771abab-f82a-4896-a0af-9bd363842781)

  </details>
  
  <details>
    <summary><strong>TELA DE REGISTRO</strong></summary><br>

  - Nesta Tela usuários que ainda não estiverem cadastrados podem se cadastrar com email e senha válidos. Assim como no login o botão de cadastro fica desabilitado até que sejam preenchidos dados válidos, para isso:
    
    - o `email` deve estar em um formato válido e a `senha` deve possuir 6 caracteres ou mais.
    
  ![Captura de tela de 2023-06-09 14-45-07](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/7a408ba5-8c3b-48f0-b00b-4de6694ebadb)
    
  ![Captura de tela de 2023-06-09 14-46-53](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/b28b30a9-091f-44ff-8be4-ca1c9033ab81)

  </details>
  
  <details>
    <summary><strong>TELA DE TODAS AS POSTAGENS</strong></summary><br>

  - Nesta Tela o usuário pode visualizar todas as postagens de todos os usuários ordenando elas da mais antiga para a mais recente ou o contrário:
    
  ![Captura de tela de 2023-06-09 14-47-37](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/728ab801-6017-44b0-b6f7-0133f61f8011)

  </details>
  
    
  <details>
    <summary><strong>TELA DE SUAS POSTAGENS</strong></summary><br>
    
  - Nesta Tela o usuário pode visualizar apenas as suas postagens, e assim como na tela de login ele pode ordenar as postagens da mais antiga para a mais recente ou o contrário:
    
  ![Captura de tela de 2023-06-09 15-02-12](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/948e2af7-547d-499b-9481-86985fd5175c)

  </details>
    
  <details>
    <summary><strong>TELA DE DETALHES DE UMA POSTAGEM</strong></summary><br>

  - Nesta Tela o usuário pode visualizar detalhes de alguma postagem de seu interesse:
    
  ![Captura de tela de 2023-06-09 14-49-03](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/c68f215d-0d61-4c7b-a1a6-a9a70cb7a6d9)

  - Caso o usuário seja o responsável pela postagem os botões de `editar` e `deletar` postagem ficaram habilitados:
    
  ![Captura de tela de 2023-06-09 15-04-37](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/b29b1995-11c5-42d4-8214-12193b89c899)
    
  - Ao clicar em `delerar` a postagem será excluída e removida do banco de dados.

  </details>
      
  <details>
    <summary><strong>TELA DE EDITAR POSTAGEM</strong></summary><br>

  - Nesta Tela o usuário pode editar uma postagem que ele fez:
    
  ![Captura de tela de 2023-06-09 15-06-21](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/32563485-176a-4822-9a8e-0302ac4b158e)

  - Ao clicar em salvar ele é redirecionado novamente para a pagina de detalhes da postagem e ela já estará com todas as modificações:
    
  ![Captura de tela de 2023-06-09 15-06-55](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/156b35a1-8e53-4067-a09b-7cfc8498035a)

  </details>
  
  <details>
    <summary><strong>TELA DE CRIAR POSTAGEM</strong></summary><br>

  - Nesta Tela o usuário pode criar uma nova postagem:
    
  ![Captura de tela de 2023-06-09 14-50-07](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/791f941a-151d-4243-ae20-0eb918fddfee)

  - Ao clicar em salvar ele é redirecionado novamente para a pagina de detalhes da nova postagem:
    
  ![Captura de tela de 2023-06-09 15-00-04](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/ddb17eea-f1dc-4971-9485-b3202f1cbe1f)

  </details>
    
  <details>
    <summary><strong>DETALHES ADICIONAIS</strong></summary><br>

  - Na `NAVBAR` o nome do usuário fica sempre disponível, assim como o botão de `SAIR`:
    
  ![Captura de tela de 2023-06-09 15-00-56](https://github.com/J0a0Helder/J0a0Helder/assets/106708779/e308a284-b5b2-4d95-bceb-c0c0af8503cf)

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
