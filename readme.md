
# Desafio para desenvolvedor jr da SoftMarkersBR

O desafio apresentado é um blog com sistema de edição, deleção, adição e visibilidade de artigos, tendo tbm um sistema de login e registro de usuários.


## Instalação♻️

Instale O sistema com npm

- faça o clone do projeto para a sua máquina, após concluído entre na pasta backend e na pasta frontend/app e execute o seguinte código:

```
npm install
```

- logo em seguida crie no seu banco de dados *mysql* um database com o nome 'blog'. Feito isto basta apenas iniciar o servidor no backend com o seguinte código, lembrando que a senha e o user padrão do projeto para acessar o seu banco de dados ficou respectivamente como: root, root

```
npm run start
```

- Em seguida podemos dar o start no servidor do frontend com o seguinte código

```
npm run dev
```

Dessa forma o projeto estará pronto para ser utilizado,



    
## Documentação da API📖


Você deverá desenvolver um blog. Para isso, separamos a proposta desse desafio em duas etapas:
**Back-end:**
Desenvolva uma API utilizando Node JS (ExpressJS ou NestJS) com um dos framework informados, que contenha as seguintes rotas:
- `/register` - [POST] - esta rota deve cadastrar um usuário;
- `/login` - [POST] - esta rota deve autenticar um usuário;
- `/posts` - [POST] - esta rota deve cadastrar uma postagem mantendo a referência do autor. (requer autenticação);
- `/posts/{id}` - [PUT] - esta rota deve editar a postagem do ID especificado mantendo a referência do autor. (requer autenticação);
- `/posts` - [GET] - esta rota deve retornar a lista de todas as postagens ordenadas das mais recentes para as mais antigas com a possibilidade de inverter esta ordenação e de retornar apenas as postagens do usuário que fez a requisição (requer autenticação);
- `/posts/{id}` - [GET] - esta rota deve retornar a postagem do ID especificado com todos os seus dados (requer autenticação);
- `/posts/{id}` - [DELETE] - esta rota deve deletar a postagem do ID especificado.
**Front-end:**
Desenvolva uma aplicação web utilizando o framework front-end react (React cli ou NextJs) e esta deve atender as seguintes histórias:
- Eu como usuário desejo me cadastrar;
- Eu como usuário desejo realizar login;
- Eu como usuário autenticado desejo visualizar todas as postagens;
- Eu como usuário autenticado desejo visualizar os detalhes de uma postagem; - Eu como usuário autenticado desejo visualizar todas as minhas postagens;
- Eu como usuário autenticado desejo criar uma postagem;
- Eu como usuário autenticado desejo editar uma postagem que eu criei;
- Eu como usuário autenticado desejo deletar uma postagem que eu criei.
## Autores

com ❤️ [@Felipe Teixeira](https://www.linkedin.com/in/felipe-teixeira-devfullstack)

