// const sinon = require('sinon');
// const { expect } = require('chai');
// const { findPost } = require('../../../middlewares/postValidation');

// describe('Testes unitários do middleware findPost', () => {
//   describe('Testa findPost quando NÃO há um post com o id buscado no banco de dados', () => {
//     beforeEach(async () => {
//       sinon.stub(PostService, 'findById').resolves({ message: 'postNotFound' });
//     });

//     afterEach(async () => {
//       PostService.findById.restore();
//     });

//     it('Testa se é lançado um erro com a mensagem correta', async () => {
//       const req = {};
//       const res = {};
//       let error;
//       try {
//         req.params = { id: 70 };
//         await findPost(req, res);
//       } catch (err) {
//         error = err;
//       }
//       expect(error.message).to.be.deep.equal('postNotFound');
//     });
//   });
// });
