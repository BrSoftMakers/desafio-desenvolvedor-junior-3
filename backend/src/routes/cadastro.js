const express = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Pagina de Cadastro");
});

router.post('/', UsuarioController.cadastrarUsuario);
router.put('/:id', UsuarioController.atualizaUsuario);
router.delete('/:id', UsuarioController.deletarUsuario);

module.exports = router;