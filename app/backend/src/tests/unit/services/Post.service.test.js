const sinon = require('sinon');
const { expect } = require('chai');
const { Post } = require('../../../database/models');
const PostService = require('../../../services/Post.service');
const {
  insertedPost,
  postToInsert,
  allPosts,
  postsByUser,
  singlePost,
} = require('./mocks/Post.mock');

describe('Testes unitários do service Post', () => {
  describe('Testa a função insert ao incluir um post no banco de dados', () => {
    beforeEach(async () => {
      sinon.stub(Post, 'create').resolves(insertedPost);
    });

    afterEach(async () => {
      Post.create.restore();
    });

    it('Testa se um objeto é retornado', async () => {
      const response = await PostService.insert(postToInsert);

      expect(response).to.be.an('object');
    });

    it('Testa se o objeto contém informações da pessoa usuária inserida', async () => {
      const response = await PostService.insert(postToInsert);

      expect(response).to.be.deep.equal(insertedPost);
    });
  });

  describe('Testa a função findAll que recupera todos os posts no banco de dados', () => {
    beforeEach(async () => {
      sinon.stub(Post, 'findAll').resolves(allPosts);
    });

    afterEach(async () => {
      Post.findAll.restore();
    });

    it('Testa se o retorno é um array com objetos', async () => {
      const response = await PostService.findAll();

      expect(response).to.be.an('array');
    });

    it('Testa se os posts retornados estão ordenados por Id', async () => {
      const response = await PostService.findAll();

      response.forEach(({ id }, index) => expect(id).to.be.equal(index + 1));
    });

    it('Testa se todos os posts são retornados', async () => {
      const response = await PostService.findAll();

      expect(response).to.be.eql(allPosts);
    });
  });

  describe('Testa a função findByUser que recupera todos os posts de uma pessoa usuária específica no banco de dados', () => {
    describe('Testa a função findByUser quando há posts daquela pessoa usuária no banco', () => {
      beforeEach(async () => {
        sinon.stub(Post, 'findAll').resolves(postsByUser);
      });

      afterEach(async () => {
        Post.findAll.restore();
      });

      it('Testa se o retorno é um array com objetos', async () => {
        const response = await PostService.findByUser({ userId: 2 });

        expect(response).to.be.an('array');
      });

      it('Testa se todos os posts são retornados', async () => {
        const response = await PostService.findByUser({ userId: 2 });

        expect(response).to.be.eql(postsByUser);
      });
    });

    describe('Testa a função findByUser quando não há posts daquela pessoa usuária no banco', () => {
      beforeEach(async () => {
        sinon.stub(Post, 'findAll').resolves([]);
      });

      afterEach(async () => {
        Post.findAll.restore();
      });

      it('Testa se é um objeto', async () => {
        const response = await PostService.findByUser({ userId: 25 });

        expect(response).to.be.an('object');
      });

      it('Testa se esse objeto possui a mensagem correta', async () => {
        const response = await PostService.findByUser({ userId: 25 });

        expect(response).to.be.deep.equal({
          message: 'thereAreNoPostsByThisUser',
        });
      });
    });
  });

  describe('Testa a função findByPk que recupera as informações de um post específico no banco de dados', () => {
    describe('Testa a função findByPk quando há um post com o id buscado', () => {
      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(singlePost);
      });

      afterEach(async () => {
        Post.findByPk.restore();
      });

      it('Testa se o retorno é um objetos', async () => {
        const response = await PostService.findByPk({ id: 7 });

        expect(response).to.be.an('object');
      });

      it('Testa se o post retornado contém as informações corretas', async () => {
        const response = await PostService.findByPk({ id: 7 });

        expect(response).to.be.eql(singlePost);
      });
    });

    describe('Testa a função findByPk quando NÃO há um post com o id buscado', () => {
      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(null);
      });

      afterEach(async () => {
        Post.findByPk.restore();
      });

      it('Testa se o retorno é um objeto', async () => {
        const response = await PostService.findByPk({ id: 25 });

        expect(response).to.be.an('object');
      });

      it('Testa se esse objeto possui a mensagem correta', async () => {
        const response = await PostService.findByPk({ id: 25 });

        expect(response).to.be.deep.equal({ message: 'postNotFound' });
      });
    });
  });

  describe('Testa a função update que atualiza um post no banco de dados', () => {
    describe('Testa se, quando um id válido é passado, o post é atualizado corretamente', () => {
      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(singlePost);
        sinon.stub(Post, 'update').resolves([1]);
      });

      afterEach(async () => {
        Post.findByPk.restore();
        Post.update.restore();
      });

      it('Testa se um objeto é retornado', async () => {
        const response = await PostService.update({ id: 7 }, postToInsert);

        expect(response).to.be.an('object');
      });

      it('Testa se o objeto contém informações atualizadas', async () => {
        const response = await PostService.update({ id: 7 }, postToInsert);

        expect(response).to.be.deep.equal({
          message: 'O post foi atualizado com sucesso!',
        });
      });
    });
  });

  describe('Testa a função delete que apaga um post no banco de dados', () => {
    describe('Testa se, quando um id válido é passado o post é excluído', () => {
      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(singlePost);
        sinon.stub(Post, 'destroy').resolves();
      });

      afterEach(async () => {
        Post.findByPk.restore();
        Post.destroy.restore();
      });

      it('Testa se um objeto é retornado', async () => {
        const response = await PostService.delete({ id: 7 });

        expect(response).to.be.an('object');
      });

      it('Testa se o objeto contém a mensagem correta', async () => {
        const response = await PostService.delete({ id: 7 });

        expect(response).to.be.deep.equal({
          message: 'Post excluído com sucesso!',
        });
      });
    });
  });
});
