const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSecret = process.env.TOKEN_SECRET;

function autenticacaoMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({ error: 'Token de autenticacao nao fornecido '});
    }

    try {
        const decoded = jwt.verify(token, tokenSecret);

        req.usuarioAutenticado = decoded.usuario;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Token de autenticacao invalido '});
    }
}

module.exports = { autenticacaoMiddleware };