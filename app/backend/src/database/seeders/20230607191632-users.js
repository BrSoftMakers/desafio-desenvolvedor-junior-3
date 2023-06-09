module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'João Hélder',
        email: 'jh@softmakers.com',
        password: '0e714e3e5208a0365c0018330510cba0', // joaomaker
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@softmakers.com',
        password: '3c28d2b0881bf46457a853e0b07531c6', // fulana@123
      }
    ],
    { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
