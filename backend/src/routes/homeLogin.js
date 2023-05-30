import express from 'express';

const router = express.Router();

//Apagar variavel USERS quando integrar com banco de dados
const users = [
    {
        id: 1,
        nome: "Lucas",
        email: "lucas@contato.com",
        password: "123"
    }
]

//Rota Inicial do projeto
router.get('/', (req, res) => {
    res.send("Bem vindo a pagina inicial do Blog");
});

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if(user) {
        return res.status(200).send(email);
    } else {
        return res.status(401).json({ message: "Credenciais inválidas." });
    }
});


export default router;