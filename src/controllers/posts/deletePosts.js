const knex = require("../../connect");

const deletePosts = async (request, response) => {
  const { id } = request.params;

  try {
    const postExiste = await knex("posts").where({ id }).first();
    const { titulo, descricao } = request.body;

    if (!postExiste) {
      return response.status(404).json({ message: "Postagem não encontrado!" });
    }

    const postDelete = await knex("posts")
      .delete({ titulo, descricao })
      .where({ id })
      .returning("*");

    return response
      .status(200)
      .json({ mensagem: "Post excluído com sucesso." });
  } catch (error) {
    return response.status(401).json(error.message);
  }
};

module.exports = {
  deletePosts,
};
