const sinon = require('sinon');
const { expect } = require('chai');
const PostService = require('../../../services/Post.service');
const PostController = require('../../../controllers/Post.controller');

describe('Testes unitários do controller Post', () => {
  describe('Testa o comportamento da função insert ao inserir com sucesso um post no banco de dados', () => {
    const postToInsert = {};
    const insertedPost = {};

    beforeEach(async () => {
      sinon.stub(PostService, 'insert').resolves(insertedPost);
    });

    afterEach(async () => {
      PostService.insert.restore();
    });

    it('Testa se o status de retorno é 201', async () => {
      const req = {};
      const res = {};
      req.body = postToInsert;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await PostController.insert(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });

    it('Testa se o json é chamado com o post inserido', async () => {
      const req = {};
      const res = {};
      req.body = postToInsert;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      PostController.insert(req, res);

      expect(res.json.calledWith(insertedPost)).to.be.true;
    });
  });
