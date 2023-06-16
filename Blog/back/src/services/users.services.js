const httpStatus = require('http-status');
const { User } = require('../models');
const { validateUser, checkEmailExists } = require('../middleware/validateUser.middleware');

const createUserService = async (userData) => {
    const { displayName, email, password } = userData;
    const userIsNotValid = validateUser(userData);

    if (userIsNotValid.status !== httpStatus.OK) {
        return userIsNotValid;
    }

    // Verifique se o email já existe
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
        return { status: httpStatus.CONFLICT, message: 'User already registered' };
    }

    const user = await User.create({ displayName, email, password });

    return user;
};

const getUserByEmail = async (email) => {
    return User.findOne({
        where: { email },
    });
};
const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw new Error('Erro ao buscar usuários');
    }
};

module.exports = {
    createUserService,
    getUserByEmail,
    getAllUsers,
};
