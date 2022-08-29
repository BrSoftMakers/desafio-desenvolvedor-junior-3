
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'joao@hotmail.com',
        password: 'super_senha'
      },

      {
        id: 2,
        email: 'zezin@gmail.com',
        password: 'senhazinha'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users', null, {});
  }
};
