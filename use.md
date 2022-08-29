<h1 align="center">Desafio Desenvolvedor Jr. Blog_App</h1>

<h2 align="center">Bem vindos ao projeto App Blog, para a produção do projeto usei algumas das tecnologias, descritas no readme,
o projeto e bem intuitivo e fácil de usar. Espero que gostem e Boas-vindas ao App Blog.</h2>

<h2 align="center">🚀 App feito para o desafio de teste técnico com técnicas de CRUD, construção de uma api e construção de um frontend</h2>

<p>Para acessar o projeto basta clonar o repositório com o comando git clone e logo em seguida usar o git checkout desafio-nailton para acessar a branch do projeto.</p>

<p>Feito o primeiro passo acessamos o diretório app do projeto com o comando cd. cd app em seguida usamos o cd frontend para acessar o visual
da nossa aplicacao e usamos o npm install para instalar as dependências, após instaladas usamos o npm start para iniciar o frontend</p>

<p>Agora abrimos outra aba no terminal onde iremos acessar mais uma vez a raiz do nosso projeto na pasta app com o cd ..</p>

<p>Neste passo iremos acessar o nosso backend com o cd backend e instalar as dependências do projeto com o npm install</p>

<p>OBS: antes de tudo vamos acessar a pasta .env do projeto e mudar o campo de senha na variável de ambiente, a mesma coisa faremos no arquivo config
que está localizado em src/database/config e novamnte no campo de senha mudaremos o valor para não haver problemas com nossa conexão</p>

<p>Terminando a instalação, usamos o comando npx sequelize db:create para criar o banco de dados com nossa ORM,
em seguida, usamos o npx sequelize db:migrate para criar nossas migrations e o npx sequelize db:seed:all que criara os seeders para popular o banco de dados</p>

<p>Agora vamos usar o npm start onde iniciaremos nossa api, e por fim podemos fazer o login ou registrar usuários no frontend da aplicação, use o App sem moderação</p>
