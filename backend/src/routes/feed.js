const express = require('express');
const router = express.Router();
const autenticacaoMiddleware = require('../middlewares/autenticaMiddleware');
const postsController = require('../controllers/PostsController.js');

router.get('/', postsController.pegaTodosOsPosts);
router.get('/:id', postsController.pegaUmPost);
router.post('/:id',postsController.criarPostagem);
router.put('/:id', postsController.editaUmPost);
router.delete('/:id', postsController.deletarPost);


module.exports = router;