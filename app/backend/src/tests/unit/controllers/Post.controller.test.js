const sinon = require('sinon');
const { expect } = require('chai');
const PostService = require('../../../services/Post.service');
const PostController = require('../../../controllers/Post.controller');
const {
  insertedPost,
  allPosts,
  postsByUser,
  singlePost,
  postToInsert,
  postToUpdate,
} = require('../mocks/Post.mock');

describe('Testes unitários do controller Post', () => {
  describe('Testa o comportamento da função insert ao inserir com sucesso um post no banco de dados', () => {
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

      await PostController.insert(req, res);

      expect(res.json.calledWith(insertedPost)).to.be.true;
    });
  });

  describe('Testa o comportamento da função findAll ao recuperar todos os posts do banco de dados', () => {
    beforeEach(async () => {
      sinon.stub(PostService, 'findAll').resolves(allPosts);
    });

    afterEach(async () => {
      PostService.findAll.restore();
    });

    it('Testa se o status de retorno é 200', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await PostController.findAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('Testa se o json é chamado com todos os posts', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await PostController.findAll(req, res);

      expect(res.json.calledWith(allPosts)).to.be.true;
    });
  });

  describe('Testa o comportamento da função findByUser', () => {
    describe('Testa findByUser quando há posts da pessoa usuária no banco de dados', () => {
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

  describe('Testa o comportamento da função findById', () => {
    describe('Testa findById quando há um post com o id buscado', () => {
      beforeEach(async () => {
        sinon.stub(PostService, 'findByPk').resolves(singlePost);
      });

      afterEach(async () => {
        PostService.findByPk.restore();
      });

      it('Testa se o status de retorno é 200', async () => {
        const req = {};
        const res = {};
        req.params = { id: 7 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.findById(req, res);

        expect(res.status.calledWith(200)).to.be.true;
      });

      it('Testa se o json é chamado com todas as informações do post buscado', async () => {
        const req = {};
        const res = {};
        req.params = { id: 7 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.findById(req, res);

        expect(res.json.calledWith(singlePost)).to.be.true;
      });
    });

    describe('Testa findById quando NÃO há um post com o id buscado', () => {
      beforeEach(async () => {
        sinon
          .stub(PostService, 'findByPk')
          .resolves({ message: 'postNotFound' });
      });

      afterEach(async () => {
        PostService.findByPk.restore();
      });

      it('Testa se é lançado um erro com a mensagem correta', async () => {
        const req = {};
        const res = {};
        let error;
        try {
          req.params = { id: 70 };
          await PostController.findById(req, res);
        } catch (err) {
          error = err;
        }
        expect(error.message).to.be.deep.equal('postNotFound');
      });
    });
  });

  describe('Testa o comportamento da função update', () => {
    describe('Testa update quando há um post com o id buscado para ser atualizado', () => {
      beforeEach(async () => {
        sinon
          .stub(PostService, 'update')
          .resolves({ message: 'O post foi atualizado com sucesso!' });
      });

      afterEach(async () => {
        PostService.update.restore();
      });

      it('Testa se o status de retorno é 200', async () => {
        const req = {};
        const res = {};
        req.params = { id: 4 };
        req.body = postToUpdate;

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.update(req, res);

        expect(res.status.calledWith(200)).to.be.true;
      });

      it('Testa se o json é chamado com mensagem de sucesso', async () => {
        const req = {};
        const res = {};
        req.params = { id: 4 };
        req.body = postToUpdate;

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.update(req, res);

        expect(
          res.json.calledWith({ message: 'O post foi atualizado com sucesso!' })
        ).to.be.true;
      });
    });
  });

  describe('Testa o comportamento da função delete', () => {
    describe('Testa delete quando há um post com o id buscado para ser excluído', () => {
      beforeEach(async () => {
        sinon
          .stub(PostService, 'delete')
          .resolves({ message: 'Post excluído com sucesso!' });
      });

      afterEach(async () => {
        PostService.delete.restore();
      });

      it('Testa se o status de retorno é 200', async () => {
        const req = {};
        const res = {};
        req.params = { id: 7 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.delete(req, res);

        expect(res.status.calledWith(200)).to.be.true;
      });

      it('Testa se o json é chamado com mensagem de sucesso', async () => {
        const req = {};
        const res = {};
        req.params = { id: 7 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await PostController.delete(req, res);

        expect(res.json.calledWith({ message: 'Post excluído com sucesso!' }))
          .to.be.true;
      });
    });
  });
});
