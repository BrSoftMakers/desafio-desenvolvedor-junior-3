const sinon = require('sinon');
const { expect } = require('chai');
const { User } = require('../../database/models');
const UserService = require('../../services/User');

describe('Testes unitários do service User', () => {
  describe('Testa o comportamento da função insert ao registrar uma pessoa usuária', () => {
    const userToInsert = {};
    const insertedUser = {};

    beforeEach(async () => {
      sinon.stub(User, 'create').resolves(insertedUser);
    });

    afterEach(async () => {
      User.create.restore();
    });

    it('Testa se um objeto é retornado', async () => {
      const response = await UserService.insert(userToInsert);

      expect(response).to.be.an('object');
    });

    it('Testa se o objeto contém informações da pessoa usuária inserida', async () => {
      const response = await UserService.insert(userToInsert);

      expect(response).to.be.deep.equal(insertedUser);
    });
  });
});
