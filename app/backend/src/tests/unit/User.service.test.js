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

  describe('Testa o comportamento da função findByEmail', () => {
    describe('Testa findByEmail se o email passado for de uma pessoa usuária cadastrada no banco', async () => {
      const email = 'email.cadastrado@email.com';
      const user = [{}];

      beforeEach(async () => {
        sinon.stub(User, 'findAll').resolves(user);
      });

      afterEach(async () => {
        User.findAll.restore();
      });

      it('Testa se o retorno é um objeto', async () => {
        const response = await UserService.findByEmail(email);

        expect(response).to.be.an('object');
      });

      it('Testa se o objeto retornado contém informações da pessoa usuária', async () => {
        const response = await productsServices.getById(1);

        expect(response).to.be.deep.equal(user[0]);
      });
    });

    describe('Testa findByEmail se o email passado for de uma pessoa usuária NÃO cadastrada no banco', async () => {
      const email = 'email.invalido@email.com';
      const user = [];

      beforeEach(async () => {
        sinon.stub(User, 'findAll').resolves(user);
      });

      afterEach(async () => {
        User.findAll.restore();
      });

      it('Testa se é um objeto', async () => {
        const response = await UserService.findByEmail(email);

        expect(response).to.be.an('object');
      });
      it('Testa se esse objeto possui a mensagem correta', async () => {
        const response = await UserService.findByEmail(email);

        expect(response).to.be.deep.equal({
          message:
            'Email não corresponde a nenhuma pessoa cadastrada no banco de dados!',
          code: 404,
        });
      });
    });
  });
});
