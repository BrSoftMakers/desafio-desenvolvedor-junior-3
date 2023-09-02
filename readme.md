# Desafio - Desenvolvedor Fullstack Junior 3.
Desafio realizado para vaga de Desenvolvedor Fullstack Junior 3.

## Instruções

## Proposta
Você deverá desenvolver um blog. Para isso, separamos a proposta desse desafio em duas etapas:

**Back-end:**
Desenvolva uma Restful API utilizando Node.JS que contenha as seguintes rotas:
- [X] `/register` - [POST] - esta rota deve cadastrar um usuário;
- [X] `/login` - [POST] - esta rota deve autenticar um usuário;
- [X] `/posts` - [POST] - esta rota deve cadastrar uma postagem mantendo a referência do autor. (requer autenticação);
- [X] `/posts/{id}` - [PUT] - esta rota deve editar a postagem do ID especificado mantendo a referência do autor. (requer autenticação);
- [X] `/posts` - [GET] - esta rota deve retornar a lista de todas as postagens ordenadas das mais recentes para as mais antigas com a possibilidade de inverter esta ordenação e de retornar apenas as postagens do usuário que fez a requisição (requer autenticação);
- [X] `/posts/{id}` - [GET] - esta rota deve retornar a postagem do ID especificado com todos os seus dados (requer autenticação);
- [X] `/posts/{id}` - [DELETE] - esta rota deve deletar a postagem do ID especificado.

**Front-end:**
Desenvolva uma aplicação web utilizando o framework front-end react e esta deve atender as seguintes histórias de usuário:
- [X] Eu como usuário desejo me cadastrar;
- [X] Eu como usuário desejo realizar login;
- [X] Eu como usuário autenticado desejo visualizar todas as postagens;
- [X] Eu como usuário autenticado desejo visualizar os detalhes de uma postagem;
- [X] Eu como usuário autenticado desejo visualizar todas as minhas postagens;
- [X] Eu como usuário autenticado desejo criar uma postagem;
- [X] Eu como usuário autenticado desejo editar uma postagem que eu criei;
- [X] Eu como usuário autenticado desejo deletar uma postagem que eu criei.

