const { Sequelize } = require('sequelize');

const connection = new Sequelize('blog', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection