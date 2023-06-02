const express = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');
const router = express.Router();


//Rota Inicial do projeto
router.get('/', (req, res) => {
    res.send("Bem vindo a pagina inicial do Blog");
});

router.post('/', UsuarioController.validaUsuarioParaLogin);

module.exports = router;