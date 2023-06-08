module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('posts',
    [
      {
        id: 1,
        title: 'Dev do ano',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        user_id: 1,
        published: new Date('2023-04-01T19:58:00.000Z'),
        updated: new Date('2023-04-01T19:58:51.000Z'),
      },
      {
        id: 2,
        title: 'Post de teste',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        user_id: 1,
        published: new Date('2023-05-01T19:58:00.000Z'),
        updated: new Date('2023-05-01T19:58:51.000Z'),
      },
      {
        id: 3,
        title: 'Melhor post do mundo',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        user_id: 2,
        published: new Date('2023-02-01T19:58:00.000Z'),
        updated: new Date('2023-02-01T19:58:51.000Z'),
      },
      {
        id: 4,
        title: 'post de teste 2',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
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