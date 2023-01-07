<div align="center">
  <img src="https://vagas.softmakers.com.br/assets/img/logotipo14xxhdpi.png" width="400" alt="Logo SoftMakers" />
</div>

<br>

## Como baixar e executar a aplicação

```bash
    git clone git@github.com:franklinrms/desafio-desenvolvedor-junior-3.git
    cd desafio-desenvolvedor-junior-3
```

<br>

> Para rodar este método você precisa estar com o `Docker` instalado em seu computador

```bash
    npm run compose
```

ou

```bash
    docker-compose up -d --build
```

<details>
  <summary>Como executar sem Docker</summary>
  
  <br>
  
> Para rodar este método você precisa estar com o ``node`` instalado em seu computador e acesso a um banco de dados ``PostgreSQL``

- Para instalar dependências do Backend:

```bash
    cd server && npm install
```

Você deverá configurar as variáveis de ambiente em um arquivo `.env`

> `env.example`

```env
  PORT=3030
  DATABASE_URL=postgres://postgres:postgres@localhost:5432/blog
  JWT_SECRET=secret
```

- Para executar a api:
  `bash
     npm start
    `
  <br>

- Para instalar dependências do Frontend:

```bash
    cd web && npm install
```

- Para executar o projeto:

```bash
    npm start
```

</details>

<br>

<details>
  <summary>Desafio proposto </summary>

# Desafio - Desenvolvedor Fullstack Junior 3.

Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato à vaga de Desenvolvedor Fullstack Junior 3.

## Instruções

- Faça um fork deste repositório;
- Utilize alguma das tecnologias (front-end e back-end) informadas na proposta desse desafio;
- Crie um passo a passo de como rodar a sua aplicação;
- Após finalizar, submeta um pull request com um comentário informando o seu e-mail de contato e aguarde nossa avaliação.

## Proposta

Você deverá desenvolver um blog. Para isso, separamos a proposta desse desafio em duas etapas:

**Back-end:**
Desenvolva uma Restful API utilizando Node.JS que contenha as seguintes rotas:

- `/register` - [POST] - esta rota deve cadastrar um usuário;
- `/login` - [POST] - esta rota deve autenticar um usuário;
- `/posts` - [POST] - esta rota deve cadastrar uma postagem mantendo a referência do autor. (requer autenticação);
- `/posts/{id}` - [PUT] - esta rota deve editar a postagem do ID especificado mantendo a referência do autor. (requer autenticação);
- `/posts` - [GET] - esta rota deve retornar a lista de todas as postagens ordenadas das mais recentes para as mais antigas com a possibilidade de inverter esta ordenação e de retornar apenas as postagens do usuário que fez a requisição (requer autenticação);
- `/posts/{id}` - [GET] - esta rota deve retornar a postagem do ID especificado com todos os seus dados (requer autenticação);
- `/posts/{id}` - [DELETE] - esta rota deve deletar a postagem do ID especificado.

**Front-end:**
Desenvolva uma aplicação web utilizando o framework front-end react e esta deve atender as seguintes histórias de usuário:

- Eu como usuário desejo me cadastrar;
- Eu como usuário desejo realizar login;
- Eu como usuário autenticado desejo visualizar todas as postagens;
- Eu como usuário autenticado desejo visualizar os detalhes de uma postagem;
- Eu como usuário autenticado desejo visualizar todas as minhas postagens;
- Eu como usuário autenticado desejo criar uma postagem;
- Eu como usuário autenticado desejo editar uma postagem que eu criei;
- Eu como usuário autenticado desejo deletar uma postagem que eu criei.
  > **Observações:**
  >
  > - Sua aplicação web DEVE se comunicar com sua API;
  > - Você pode utilizar o banco de dados de sua preferência.

## Diferenciais

Será considerado como diferenciais a utilização ou o conhecimento nas seguintes tecnologias:

- Utilização de algum ORM;
- Conhecimento em React Native;
- Conhecimento em Firebase;
- Conhecimento em Docker;
- Conhecimento em infraestrutura em nuvem.

</details>

<br>

**Minha implementação:**

## Back-end:

> Técnologias usadas

- [TypeScript](https://www.typescriptlang.org/) como linguagem;
- [JWT](https://jwt.io/introduction) para autenticação com nome de usuário e senha;
- [PostgreSQL](https://www.postgresql.org/) como banco de dados, usando:
  - [Prisma](https://www.prisma.io/) como ORM;

Este projeto usa a arquitetura MSC que divide a aplicação em 3 partes como:

- Model: tudo relacionado à conexão com o banco de dados;
- Service: tudo relacionado às regras de negócio da aplicação;
- Controller: lida com a entrada do usuário;

E utiliza a estratégia JWT para autenticação de seus usuários.

Para uma visão geral detalhada de todas as rotas e respostas desta API, acesse a documentação:

[http://localhost:3030/api-docs/](http://localhost:3030/api-docs/)  
 `A aplicação deve estar em execução para acessar o link`

## Front-end:

> Técnologias usadas

- [TypeScript](https://www.typescriptlang.org/) como linguagem;
- [Axios](https://axios-http.com/ptbr/) para realizar a integração com o backend;
- [React](https://reactjs.org/) para construir as telas;
- [Styled Components](https://styled-components.com/) para estilização;

<div style="display:flex;justify-content:space-around;flex-flow:row wrap">
  <img src="./images/frame-01.png" width="400px"/>
  <img src="./images/frame-02.png" width="400px"/>
  <img src="./images/frame-03.png" width="400px"/>
  <img src="./images/frame-04.png" width="400px"/>
</div>

## Contato

<a href="https://www.linkedin.com/in/franklinrms/" target="_blank"><img src="https://img.shields.io/badge/linkedin-%23181717.svg?style=for-the-badge&logo=linkedin&logoColor=2396ED&color=0D1117"></a>
<a href="mailto:franklinramos@outlook.com" target="_blank"><img src="https://img.shields.io/badge/Email-%23181717?style=for-the-badge&logo=microsoft-outlook&logoColor=2396ED&color=0D1117"></a>
<a href="https://www.codebyfranklin.cf/" target="_blank"><img src="https://img.shields.io/badge/Portfolio-%23181717.svg?style=for-the-badge&logo=react&logoColor=2396ED&color=0D1117"></a>
