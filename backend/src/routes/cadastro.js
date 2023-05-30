import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Pagina de Cadastro");
});

router.post('/', (req, res) => {
    res.send("POST FEITO");
});

export default router;