const sinon = require('sinon');
const { expect } = require('chai');
const PostService = require('../../../services/Post.service');
const PostController = require('../../../controllers/Post.controller');

describe('Testes unitários do controller Post', () => {

  describe('Testa o comportamento da função findAll ao recuperar todos os posts do banco de dados', () => {
    const allPosts = [{}];

    beforeEach(async () => {
      sinon.stub(PostService, 'findAll').resolves(allPosts);
    });

    afterEach(async () => {
      PostService.findAll.restore();
    });

    it('Testa se o status de retorno é 200', async () => {
      const req = {};
      const res = {};
      req.body = postToInsert;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await PostController.findAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('Testa se o json é chamado com o post inserido', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      PostController.findAll(req, res);

      expect(res.json.calledWith(allPosts)).to.be.true;
    });
  });
