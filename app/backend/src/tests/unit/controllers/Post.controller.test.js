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


  describe('Testa o comportamento da função findByUser', () => {
    describe('Testa findByUser quando há posts da pessoa usuária no banco de dados', () => {
      const postsByUser = [{}];

      beforeEach(async () => {
        sinon.stub(PostService, 'findByUser').resolves(postsByUser);
      });

      afterEach(async () => {
        PostService.findByUser.restore();
      });

      it('Testa se o status de retorno é 200', async () => {
        const req = {};
        const res = {};
        req.body = { userId: 2 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.findByUser(req, res);

        expect(res.status.calledWith(200)).to.be.true;
      });

      it('Testa se o json é chamado com todos os posts', async () => {
        const req = {};
        const res = {};
        req.body = { userId: 2 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.findByUser(req, res);

        expect(res.json.calledWith(postsByUser)).to.be.true;
      });
    });

    describe('Testa findByUser quando NÃO há posts da pessoa usuária no banco de dados', () => {
      beforeEach(async () => {
        sinon
          .stub(PostService, 'findByUser')
          .resolves({ message: 'thereAreNoPostsByThisUser' });
      });

      afterEach(async () => {
        PostService.findByUser.restore();
      });

      it('Testa se é lançado um erro com a mensagem correta', async () => {
        const req = {};
        const res = {};
        let error;
        try {
          req.body = { userId: 25 };
          await PostController.findByUser(req, res);
        } catch (err) {
          error = err;
        }
        expect(error.message).to.be.deep.equal('thereAreNoPostsByThisUser');
      });
    });
  });

