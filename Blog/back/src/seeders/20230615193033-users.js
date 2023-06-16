/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface) => {
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    displayName: 'Tiago',
                    email: 'leo@test.com',
                    password: '123123123',
                },
                {
                    displayName: 'marcus',
                    email: 'leo@test.com',
                    password: '123123123',
                },
            ],
            {},
        );
    },

    down: async (queryInterface) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
