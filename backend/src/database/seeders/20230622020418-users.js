'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        password: "a4c86edecc5aee06eff8fdeda69e0d04",
      },
      {
        id: 2,
        name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        password: "a4c86edecc5aee06eff8fdeda69e0d04",
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
