#Softmakers

##Desafio Full Stack

Boa tarde Tiago Pedroso, estou lhe enviando o desafio Full Stack proposto pela Softmakers.
Que infelizmente não conseguir finalizar. 

Ficou faltando a finalização da conexão do Front end com Back end para a retirada de dados salvos no mongoDB. Mas acredito, mesmo que não tenha finalizado por completo, me sinto orgulho em demonstrar minhas habilidades e meu potencial em crescimento e de aprendizado.

No projeto foram utilizados: React.js, Node.js e mongoDB. Este último usado para armazenamento das informações do blog. 


###Diretório API: Utilizados pacotes como express, mongoose, multer, bcrypt, nodemon, dotenv no lado do servidor (Back-end).

index.js: Aonde está sendo importados as rotas, conectando o mongoDB, as configurações para salvar as imagens.(express, mongoose, multer)

.nev: Para conectar o mongoDB de maneira mais facil. (dotenv)

models: Category.js: Definindo a estrutura do arquivo. Quais dados será recebidos.(Categorias);
        Post.js:Definindo a estrutura do arquivo. Quais dados será recebidos.(Postes);
        User.js:Definindo a estrutura do arquivo. Quais dados será recebidos.(Usuários).

routes: auth.js: registra e faz o login do usuario;
        posts.js: pegar um poste espécifico ou todos, deletar e adicionar;
        categories.js: Pegar e salvar as categorias das notícias;
        users.js: configurações do usuario, onde pode deletar, atualiar senha e encontrar o usuario pelo ID.

models: Aonde as imagens seriam salvas desse projeto.

pacote bcrypt: criptografar as senhas dos usuarios.

###Diretório Client: Foi utilizados pacotes como React-router-dom, axios, além de Hooks como: useState e useEffect. No lado do cliente (Front-end).

src: Está localizado as nossas rotas, neste caso as páginas. E os componentes (Home, topBar, post...)
Tudo organizado.


Para o funcionamento precisa acessar uma das pastas pelo terminal e usar o comando yarn start ou npm start.

Ficarei no aguardo pelo contato da Softmarkers por mais novidades.

Atenciosamente,
José Wêmerson dos Santos.