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
});
