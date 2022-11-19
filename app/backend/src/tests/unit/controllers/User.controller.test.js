const sinon = require('sinon');
const { expect } = require('chai');
const UserService = require('../../../services/User.service');
const UserController = require('../../../controllers/User.controller');

describe('Testes unitários do controller User', () => {
  describe('Testa o comportamento da função login', () => {
    describe('Testa login quando a pessoa usuária existe no banco de dados', () => {
      const user = {};

      beforeEach(async () => {
        sinon.stub(UserService, 'findByEmail').resolves(user);
      });

      afterEach(async () => {
        UserService.findByEmail.restore();
      });

      it('Testa se o status de retorno é 200', async () => {
        const req = {};
        const res = {};
        req.body = { email: 'airel.ribeiro@gmail.com', password: '123456789' };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await UserController.login(req, res);

        expect(res.status.calledWith(200)).to.be.true;
      });

      it('Testa se o json é chamado com um objeto contendo um token', async () => {
        const req = {};
        const res = {};
        req.body = { email: 'airel.ribeiro@gmail.com', password: '123456789' };
        const json = { token: '' };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await UserController.login(req, res);

        expect(res.json.calledWith(json)).to.be.true;
      });
    });

    describe('Testa login quando a pessoa usuária NÃO existe no banco de dados', () => {
      beforeEach(async () => {
        sinon
          .stub(UserService, 'findByEmail')
          .resolves({ message: 'userNotFound' });
      });

      afterEach(async () => {
        UserService.findByEmail.restore();
      });

      it('Testa se é lançado um erro com a mensagem correta', async () => {
        const req = {};
        const res = {};
        let error;
        try {
          req.body = {
            email: 'invalid.email@email.com',
            password: '999999999',
          };
          await UserController.login(req, res);
        } catch (err) {
          error = err;
        }
        expect(error.message).to.be.deep.equal('userNotFound');
      });
    });
  });

  describe('Testa o comportamento da função register, que insere pessoa usuária no banco e retorna um token', () => {
    const user = {};
    const token = '';

    beforeEach(async () => {
      sinon.stub(UserService, 'insert').resolves(user);
      sinon.stub(UserService, 'generateToken').resolves(token);
    });

    afterEach(async () => {
      UserService.insert.restore();
      UserService.generateToken.restore();
    });

    it('Testa se o status de retorno é 201', async () => {
      const req = {};
      const res = {};
      req.body = {
        name: 'Airel Ribeiro',
        email: 'airel.ribeiro@gmail.com',
        password: '123456789',
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await UserController.login(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });

    it('Testa se o json é chamado com um objeto contendo um token', async () => {
      const req = {};
      const res = {};
      req.body = {
        name: 'Airel Ribeiro',
        email: 'airel.ribeiro@gmail.com',
        password: '123456789',
      };
      const json = { token: '' };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await UserController.login(req, res);

      expect(res.json.calledWith(json)).to.be.true;
    });
  });
});
