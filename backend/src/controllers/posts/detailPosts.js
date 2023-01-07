const knex = require("../../connect");

const detailPosts = async (request, response) => {
  const { id } = request.params;
  try {
    const postExiste = await knex("posts").where({autor: id}).first();

    if (!postExiste) {
      return response.status(404).json({ message: "Postagem não encontrado!" });
    }
    return response.status(200).json(postExiste);    

  } catch (error) {
    return response.status(401).json(error.message);
  }
};

module.exports = {
  detailPosts,
};
