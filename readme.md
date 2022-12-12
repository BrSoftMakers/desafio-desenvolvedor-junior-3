# :books: Descrição do projeto

<p align="justify">
 Aplicação desenvolvida para o desafio de desenvolvedor junior 3 da SoftMakers:
 Aplicação de blog, onde o usuário pode criar uma conta, fazer login, ver os posts, criar um post, ver
 detalhes de um post, editar um post e deletar um post, utilizando autenticação para fazer as requisições necessárias.
</p>

# :bookmark_tabs: Ferramentas utilizadas 

front-end
- Javascript
- Webpack
- ReactJS
- Chakra UI
- Axios
- React router dom
- Eslint
- Dotenv

back-end
- Typescript
- NodeJS
- Express
- Prisma
- Postgres
- Jsonwebtoken
- Bcrypt
- Cors
- Eslint
- Dotenv

Infra
- Docker
- Docker-compose

# 💻 Como rodar na minha máquina

## 🐳 Com Docker e Docker-compose

### Dependências mínimas para rodar a aplicação com docker
  - Docker: `Versão usada => Docker version 20^`
  - Docker compose: `Versão usada => Docker-compose version 2.3.3`

### Clone o projeto e entre na pasta
```
 git clone https://github.com/AndreyNovaes/desafio-desenvolvedor-junior-3.git
 cd desafio-desenvolvedor-junior-3
```
### Suba a aplicação com o compose
```
 npm run compose:up
```

Entre no container do back-end
```
 npm run docker:backend
```

Rode as migrations
```
 npx prisma migrate dev
```
### O front-end vai estar rodando na porta 5000, definida no docker-compose
```
http://localhost:5000
```
### O back-end vai estar rodando na porta 3001, definida no docker-compose
```
http://localhost:3001
```
### O banco de dados vai estar rodando na porta 5433, definida no docker-compose
```
http://localhost:5433
```
