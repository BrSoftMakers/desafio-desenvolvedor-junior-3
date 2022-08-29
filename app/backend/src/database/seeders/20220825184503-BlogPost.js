'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BlogPosts', [
      {
        id: 1,
        title: 'Primeiro Post',
        content: 'Conteudo incrivel',
        userId: 1,
        published: new Date('2022-08-25T15:53:00.000Z'),
        updated: new Date('2022-08-25T15:53:51.000Z'),
      },
      {
        id: 2,
        title: 'Segundo Post',
        content: 'Conteudo incrivel Parte 2',
        userId: 1,
        published: new Date('2022-08-25T15:53:00.000Z'),
        updated: new Date('2022-08-25T15:53:51.000Z'),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  }
};
