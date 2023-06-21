const jwt = require('jsonwebtoken');
const Service = require('../services/users.services');
const userService = require('../services/users.services');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verifique se o usuário existe
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Verifique a senha
        if (user.password !== password) {
            return res.status(401).json({ error: 'password invalid' });
        }

        // Gere um token JWT
        const token = jwt.sign({ userId: user.id }, 'your-secret-key');

        // Retorne o token
        return res.json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
const createUser = async (_req, res) => {
    try {
        const { displayName, email, password } = _req.body;
        const user = await Service.createUserService({ displayName, email, password });
        if (user.status) {
            return res.status(user.status).json({ message: user.message });
        }

        return res.status(201).json(user);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
};
