const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        // Verificar e decodificar o token JWT
        const decoded = jwt.verify(token, 'your-secret-key');
        req.username = decoded.username;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = authMiddleware;
