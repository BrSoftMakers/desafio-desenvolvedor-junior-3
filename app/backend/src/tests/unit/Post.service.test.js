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

});
