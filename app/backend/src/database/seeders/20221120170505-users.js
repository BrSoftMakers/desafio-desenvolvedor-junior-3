'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Bolinho de Arroz',
          email: 'eu.souumbolinho@email.com',
          password: '25f9e794323b453885f5181f1b624d0b',
          // senha: md5('123456789')
        },
        {
          name: 'Seu Zé',
          email: 'ze.oseu@email.com',
          password: '25f9e794323b453885f5181f1b624d0b',
          // senha: md5('123456789')
        },
        {
          name: 'Dona Dulcinha',
          email: 'dulcinha@email.com',
          password: '25f9e794323b453885f5181f1b624d0b',
          // senha: md5('123456789')
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
