![image](https://user-images.githubusercontent.com/98190806/202921781-0a69a984-4814-46dc-9889-baf9fb10894c.png)

## Descrição

<p align="justify">
   <strong>Fantastic Posts</strong> é uma aplicação que gerencia postagens aleatórias compostas de título e conteúdo. Prezando pela segurança das pessoas usuárias, as postagens só podem ser acessadas pos usuários cadastrados e o banco de dados responsável por salvar as informações das pessoas usuárias não fornece rotas de consulta de dados e guarda as senhas criptografadas.
</p>

## Sumário

- [Qual banco de dados?](#banco-de-dados)
- [Entendendo o backend](https://github.com/AirelRibeiro/gestor-de-conteudos/edit/main/README.md#backend)
  - [Documentação da API](#documenta%C3%A7%C3%A3o-da-api)
- [Entendendo o frontend](#frontend)
- [Como rodar a aplicação na sua máquina](#rodando-na-sua-m%C3%A1quina)
- [Para rodar os testes](#rodando-os-testes)
- [Melhorias planejadas](#roadmap)

## Estrutura da aplicação

A aplicação é compostade três camadas: banco de dados, backend e frontend. Essas camadas estão isoladas entre si em containers **Docker**, que funcionam em conjunto geridos pelo **Docker-compose**.

### Banco de dados

<p align="justify">
     O banco de dados da aplicação é o MyBlog, suportado pelo <strong>MySQL</strong>, um sistema de gerenciamento de bancos de dados relacionais open-        source. Ele conta com duas tabelas, uma para armazenar postagens, denominada <strong>posts</strong> e outra para armazenar os usuários, denominada        <strong>users</strong>. As tabelas possuem campos e relacionamento conforme demonstrado no esquema abaixo:
  </p>

![image](https://user-images.githubusercontent.com/98190806/202918073-38b4bde4-0b42-485c-8e77-1bb4fe4b3de5.png)

### Backend

<p align="justify">
    A ligação entre o banco de dados e o frontend é feita por meio de uma <strong>API RESTful</strong>, contando com as camadas <strong>MSC</strong>        (Model, Service e Controller) e uma camada adicional de <strong>middlewares</strong> para validação de requisições e tratamento de erros. A API foi      contruída em <strong>Node.js</strong> e teve seus endpoints estruturados com uso do <strong>Express</strong>; a manipulação do banco de dados foi        facilitada pelo uso da <strong>ORM Sequelize</strong>. É uma <strong>API CRUD</strong> (Create, Read, Update and Delete), permitindo operações de        <strong>criação, leitura, atualização e exclusão</strong> de de postagens e inclusão e login de pessoas usuárias. O desenvolvimento foi orientado a      testes (TDD - Test Driven Development), por meio de testes unitários, que fizeram uso fizeram uso de <strong>Mocha</strong>, <strong>Chai</strong> e       <strong>Sinon</strong>.
</p>
   
   <details>
   <summary><h2>Documentação da API</h2></summary>

#### Retorna array com todos os itens

```http
  GET /posts
```

| Headers                | Parâmetro         | Body      | Descrição                                           |
| :--------------------- | :---------------- | :-------- | :-------------------------------------------------- |
| `Authorization:` token | ----------------- | --------- | Retorna array contendo todas as postagens no banco. |

#### Retorna um item

```http
  GET /posts/${id}
```

| Headers                | Parâmetro | Body      | Descrição                            |
| :--------------------- | :-------- | :-------- | :----------------------------------- |
| `Authorization:` token | `id`      | --------- | Retorna postagem com id do parâmetro |

#### Retorna array de itens ou objeto com mensagem

```http
  GET /posts/user
```

| Headers                | Parâmetro        | Body                                                      | Descrição                                                                                                                                                                |
| :--------------------- | :--------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Authorization:` token | ---------------- | `userId:` id da pessoa usuárica que criou o post no banco | Retorna array contendo todas as postagens cujo userId corresponde ao buscado ou uma mensagem de erro, caso a pessoa com o id buscado não tenha nenhuma postagem no banco |

#### Retorna um item

```http
  POST /posts/
```

| Headers                | Parâmetro | Body                                                                                                                         | Descrição               |
| :--------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| `Authorization:` token | --------  | **{**`title` - _min 10 caracteres_; `content` - _min 20 caracteres_; `userId` - _id da pessoa que está criando o post_ **}** | Retorna postagem criada |

#### Retorna objeto com mensagem

```http
  PUT /posts/${id}
```

| Headers                | Parâmetro | Body                                                                                                    | Descrição                              |
| :--------------------- | :-------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------- |
| `Authorization:` token | `id`      | **{**`title` - _min 10 caracteres_; `content` - _min 20 caracteres_ **}** Apenas um campo é obrigatório | Retorna mensagem de sucesso ou de erro |

#### Retorna objeto com mensagem

```http
  DELETE /posts/${id}
```

| Headers                | Parâmetro | Body      | Descrição                              |
| :--------------------- | :-------- | :-------- | :------------------------------------- |
| `Authorization:` token | `id`      | --------- | Retorna mensagem de sucesso ou de erro |

</details>
   
### Frontend

<p align="justify">
     O frontend é uma aplicação <strong>React</strong>, com estilização facilitada por componentes e classes do <strong>Bootstrap</strong>. Ela é composta por sete rotas, viabilizadas pelo <strong>React-Router-Dom</strong>, sendo elas:
     <li><strong>/login</strong>: a rota inicial, permite à pessoa usuária já cadastrada fazer login;</li>
     <li><strong>/register</strong>: permite à pessoa usuária não cadastrada fazer registro no banco;</li>
     <li><strong>/post</strong>: rota inicial após pessoa usuária logar, lista todas as postagens no banco;</li>
     <li><strong>/my-posts</strong>: mostra à pessoa usuária todas as postagens dela no banco de dados;</li>
     <li><strong>/my-posts/:id</strong>: mostra à pessoa usuária em detalhes um post específico pertencente a ela, oferecendo a opção de apagar essa postagem ou atualiza-la;</li>
     <li><strong>/create</strong>: permite à pessoa usuária criar uma nova postagem;</li>
     <li><strong>/update/:id</strong>: permite à pessoa usuária atualizar uma postagem pertencente a ela.</li>
     <br/>
     As ações relacionadas às postagens, seja para criação, leitura, atualização ou exclusão só podem ser feitas por uma pessoa usuária logada. Uma vez que é feito o login ou o registro, as informações da pessoa usuária juntamente com um token de acesso são salvos na localstorage, através desses dados, as ações são validadas.
  </p>


##

<details>
   <summary><h2>Rodando na sua máquina</h2></summary>

Clone o repositório

```bash
  git clone git@github.com:AirelRibeiro/desafio-desenvolvedor-junior-3.git
```

Entre no diretório da aplicação

```bash
  cd desafio-desenvolvedor-junior-3
  cd app
```

Instale as dependências

```bash
  npm install
```

Inicie os containers

```bash
  npm run compose:up
```

Entre no container de backend e rode o comando para popular o banco

```bash
  cd backend
  docker exec -it app_backend sh
  npm run db:reset
```

Com tudo funcionando, pode acessar a aplicação no seu navegador

```
  http://localhost:3000
```

</details>

<details>
   <summary><h2>Rodando os testes</h2></summary>

<h4>Lembre-se de rodar os comandos abaixo fora do container</h4>

Na pasta raiz entre no app e depois no diretório do backend:

```bash
  cd app
  cd backend
```

Então execute o script de testes:

```bash
  npm run test
```

</details>

<details>
   <summary><h2>Roadmap</h2></summary>

<h4>Melhorias planejadas</h4>

- Incluir testes de integração no backend;

- Implementar testes no frontend (provavelmente de integração, com RTL);

- Implementar como funcionalidades a busca de postagem pelo título e a formatação com editor wysiwyg.

</details>
