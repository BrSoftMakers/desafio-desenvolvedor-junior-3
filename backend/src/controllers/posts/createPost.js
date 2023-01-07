const knex = require("../../connect");
const yup = require("yup");

const createPost = async (request, response) => {
  const { titulo, descricao, autor, publicacao } = request.body;

  const { id } = request.params;

  const dadosObrigatorios = yup.object().shape({
    titulo: yup
      .string()
      .max(60, { mensagem: "O campo titulo não aceita mais de 60 caracteres" })
      .required({ mensagem: "É necessário informar um titulo" }),
    descricao: yup
      .string()
      .required({ mensagem: "É necessário informar uma descrição" }),
  });

  
  try {
    await dadosObrigatorios.validate(request.body);
  } catch (error) {
    return response.status(400).json(error.message);
  }
  try {

    const consulta = await knex("posts").where({ autor });

    if (!consulta) {
      return response.status(401).json({ mensagem: "Autor não encontrado!" });
    }

    const insercao = await knex("posts")
      .insert({titulo, descricao, autor, publicacao}).returning('*');

    if (insercao.rowCount === 0) {
      return response
        .status(500)
        .json({ mensagem: "Não foi possível criar um post." });
    }

     const dadosPost = await knex("posts").where({ autor }).first();

    const { ...dadosPosts } = insercao;
 
    return response
      .status(201)
      .json(dadosPosts);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = {
  createPost,
};
