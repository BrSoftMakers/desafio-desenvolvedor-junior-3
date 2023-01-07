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

> Para rodar este método você precisa estar com o ``Docker`` instalado em seu computador

```bash
    npm run compose
``` 
ou 
```bash
    docker-compose up -d --build
``` 

<details>
  <summary>Sem Docker</summary>
  
  <br>
  
> Para rodar este método você precisa estar com o ``node`` instalado em seu computador e acesso a um banco de dados ``PostgreSQL``

- Para instalar dependências do Backend:

```bash
    cd server && npm install
``` 
Você deverá configurar as variáveis de ambiente em um arquivo ``.env``

>`env.example`
  ```env
    PORT=3030
    DATABASE_URL=postgres://postgres:postgres@localhost:5432/blog
    JWT_SECRET=secret
  ```
   
 - Para executar a api:
     ```bash
      npm start
     ``` 
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

## Contato 
 
[![Linkedin Badge](https://img.shields.io/badge/-Franklin%20Ramos-0D1117?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/franklinrms/)](https://www.linkedin.com/in/franklinrms/) 
