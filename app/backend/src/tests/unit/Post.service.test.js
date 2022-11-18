const sinon = require('sinon');
const { expect } = require('chai');
const { Post } = require('../../database/models');
const PostService = require('../../services/Post');

describe('Testes unitários do service Post', () => {
  describe('Testa a função insert ao incluir um post no banco de dados', () => {
    const postToInsert = {};
    const insertedPost = {};

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
    const allPosts = [];

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

      expect(response).to.be.eql([]);
    });
  });

  describe('Testa a função findByUser que recupera todos os posts de uma pessoa usuária específica no banco de dados', () => {
    describe('Testa a função findByUser quando há posts daquela pessoa usuária no banco', () => {
      const postsByUser = [];
      const userId = 3;

      beforeEach(async () => {
        sinon.stub(Post, 'findAll').resolves(postsByUser);
      });

      afterEach(async () => {
        Post.findAll.restore();
      });

      it('Testa se o retorno é um array com objetos', async () => {
        const response = await PostService.findByUser(userId);

        expect(response).to.be.an('array');
      });

      it('Testa se todos os posts são retornados', async () => {
        const response = await PostService.findByUser(userId);

        expect(response).to.be.eql([]);
      });
    });

    describe('Testa a função findByUser quando não há posts daquela pessoa usuária no banco', () => {
      const postsByUser = [];
      const userId = 11;

      beforeEach(async () => {
        sinon.stub(Post, 'findAll').resolves(postsByUser);
      });

      afterEach(async () => {
        Post.findAll.restore();
      });

      it('Testa se é um objeto', async () => {
        const response = await PostService.findByUser(userId);

        expect(response).to.be.an('object');
      });

      it('Testa se esse objeto possui a mensagem correta', async () => {
        const response = await PostService.findByUser(userId);

        expect(response).to.be.deep.equal({
          message: 'thereAreNoPostsByThisUser',
        });
      });
    });
  });

  describe('Testa a função findByPk que recupera as informações de um post específico no banco de dados', () => {
    describe('Testa a função findByPk quando há um post com o id buscado', () => {
      const postsById = {};
      const postId = 2;

      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(postsById);
      });

      afterEach(async () => {
        Post.findByPk.restore();
      });

      it('Testa se o retorno é um objetos', async () => {
        const response = await PostService.findByPk(postId);

        expect(response).to.be.an('object');
      });

      it('Testa se o post retornado contém as informações corretas', async () => {
        const response = await PostService.findByPk(postId);

        expect(response).to.be.eql(postsById);
      });
    });

    describe('Testa a função findByPk quando NÃO há um post com o id buscado', () => {
      const postsById = null;
      const postId = 25;

      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(postsById);
      });

      afterEach(async () => {
        Post.findByPk.restore();
      });

      it('Testa se o retorno é um objeto', async () => {
        const response = await PostService.findByPk(postId);

        expect(response).to.be.an('object');
      });

      it('Testa se esse objeto possui a mensagem correta', async () => {
        const response = await PostService.findByPk(postId);

        expect(response).to.be.deep.equal({ message: 'postNotFound' });
      });
    });
  });

  describe('Testa a função update que atualiza um post no banco de dados', () => {
    describe('Testa se, quando um id válido é passado, o post é atualizado corretamente', () => {
      const postToUpdate = {};
      const updatedPost = {};
      const postId = 2;
      const postById = {};

      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(postById);
        sinon.stub(Post, 'update').resolves(updatedPost);
      });

      afterEach(async () => {
        Post.restore();
      });

      it('Testa se um objeto é retornado', async () => {
        const response = await PostService.update(postToUpdate, postId);

        expect(response).to.be.an('object');
      });

      it('Testa se o objeto contém informações atualizadas', async () => {
        const response = await PostService.update(postToUpdate, postId);

        expect(response).to.be.deep.equal(updatedPost);
      });
    });

    describe('Testa se, quando um id inválido é passado, há o retorno correto', () => {
      const postToUpdate = {};
      const postId = 25;
      const postById = null;

      before(async () => {
        sinon.stub(Post, 'findByPk').resolves(postById);
      });

      after(async () => {
        Post.restore();
      });

      it('Testa se um objeto é retornado', async () => {
        const response = await PostService.update(postToUpdate, postId);

        expect(response).to.be.an('object');
      });

      it('Testa se esse objeto possui a mensagem correta', async () => {
        const response = await PostService.update(postToUpdate, postId);

        expect(response).to.be.deep.equal({ message: 'postNotFound' });
      });
    });
  });

  describe('Testa a função delete que apaga um post no banco de dados', () => {
    describe('Testa se, quando um id válido é passado o post é excluído', () => {
      const postId = 3;
      const postById = {};

      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(postById);
        sinon.stub(Post, 'delete').resolves();
      });

      afterEach(async () => {
        Post.restore();
      });

      it('Testa se um objeto é retornado', async () => {
        const response = await PostService.delete(postId);

        expect(response).to.be.an('object');
      });

      it('Testa se o objeto contém a mensagem correta', async () => {
        const response = await PostService.delete(postId);

        expect(response).to.be.deep.equal({
          message: 'Post excluído com sucesso!',
        });
      });
    });

    describe('Testa se, quando um id inválido é passado ocorre o retorno correto', () => {
      const postId = 30;
      const postById = null;

      beforeEach(async () => {
        sinon.stub(Post, 'findByPk').resolves(postById);
      });

      afterEach(async () => {
        Post.restore();
      });

      it('Testa se um objeto é retornado', async () => {
        const response = await PostService.delete(postId);

        expect(response).to.be.an('object');
      });

      it('Testa se o objeto contém a mensagem correta', async () => {
        const response = await PostService.delete(postId);

        expect(response).to.be.deep.equal({ message: 'postNotFound' });
      });
    });
  });
});
