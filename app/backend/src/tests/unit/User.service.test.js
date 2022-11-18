const sinon = require('sinon');
const { expect } = require('chai');
const { User } = require('../../database/models');
const UserService = require('../../services/User.service');
const {
  userToInsert,
  user,
  recoverdUser,
  token,
} = require('./mocks/User.mock');
const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET || jwt_secret;

describe('Testes unitários do service User', () => {
  describe('Testa o comportamento da função insert ao registrar uma pessoa usuária', () => {
    beforeEach(async () => {
      sinon.stub(User, 'create').resolves(user);
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

      expect(response).to.be.deep.equal(user);
    });
  });

  describe('Testa o comportamento da função findByEmail', () => {
    describe('Testa findByEmail se o email passado for de uma pessoa usuária cadastrada no banco', async () => {
      beforeEach(async () => {
        sinon.stub(User, 'findAll').resolves(recoverdUser);
      });

      afterEach(async () => {
        User.findAll.restore();
      });

      it('Testa se o retorno é um objeto', async () => {
        const response = await UserService.findByEmail({
          email: 'airel.ribeiro@gmail.com',
        });

        expect(response).to.be.an('object');
      });

      it('Testa se o objeto retornado contém informações da pessoa usuária', async () => {
        const response = await UserService.findByEmail({
          email: 'airel.ribeiro@gmail.com',
        });

        expect(response).to.be.deep.equal(user);
      });
    });

    describe('Testa findByEmail se o email passado for de uma pessoa usuária NÃO cadastrada no banco', async () => {
      beforeEach(async () => {
        sinon.stub(User, 'findAll').resolves([]);
      });

      afterEach(async () => {
        User.findAll.restore();
      });

      it('Testa se é um objeto', async () => {
        const response = await UserService.findByEmail({
          email: 'email.invalido@email.com',
        });

        expect(response).to.be.an('object');
      });
      it('Testa se esse objeto possui a mensagem correta', async () => {
        const response = await UserService.findByEmail({
          email: 'email.invalido@email.com',
        });

        expect(response).to.be.deep.equal({ message: 'userNotFound' });
      });
    });
  });

  describe('Testa o comportamento da função generateToken que deve gerar token com informações da pessoa usuária', () => {
    beforeEach(async () => {
      sinon.stub(jwt, 'sign').returns(token);
    });

    afterEach(async () => {
      jwt.sign.restore();
    });

    it('Verifica se a função jwt.sign foi chamada retornando um token', () => {
      const response = UserService.generateToken(user);

      expect(response).to.be.equal(token);
    });

    it('Verifica que, desencriptado, o token contém as informações corretas', () => {
      const response = UserService.generateToken(user);
      const verifyToken = jwt.verify(response, secret);

      expect(verifyToken.data).to.be.deep.equal(user);
    });
  });
});
