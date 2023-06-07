module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('posts',
    [
      {
        id: 1,
        title: 'Dev do ano',
        content: 'Esse é um post para falar de João Hélder',
        user_id: 1,
        published: new Date('2023-04-01T19:58:00.000Z'),
        updated: new Date('2023-04-01T19:58:51.000Z'),
      },
      {
        id: 2,
        title: 'Post de teste',
        content: 'esse é um post de teste muito legal',
        user_id: 1,
        published: new Date('2023-05-01T19:58:00.000Z'),
        updated: new Date('2023-05-01T19:58:51.000Z'),
      },
      {
        id: 3,
        title: 'Melhor post do mundo',
        content: 'esse é o melhor post do mundo',
        user_id: 2,
        published: new Date('2023-02-01T19:58:00.000Z'),
        updated: new Date('2023-02-01T19:58:51.000Z'),
      },
      {
        id: 4,
        title: 'post de teste 2',
        content: 'Esse é um post de teste chato',
        user_id: 2,
        published: new Date('2023-02-01T19:58:00.000Z'),
        updated: new Date('2023-02-01T19:58:51.000Z'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  },
};