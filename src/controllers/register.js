const knex = require("../connect");
const yup = require("yup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createRegister = async (request, response) => {
  const { nome, email, senha } = request.body;

  const dadosObrigatorios = yup.object().shape({
    nome: yup
      .string()
      .max(60, { mensagem: "O campo nome não aceita mais de 60 caracteres" })
      .required({ mensagem: "É necessário informar o nome do usuário" }),
    email: yup
      .string()
      .email({ mensagem: "Você não digitou um e-mail válido" })
      .max(60, { mensagem: "O campo e-mail não aceita mais de 60 caracteres" })
      .required({ mensagem: "É necessário informar o e-mail do usuário" }),
    senha: yup
      .string()
      .min(8)
      .required({ mensagem: "É necessário informar a senha do usuário" }),
  });

  try {
    await dadosObrigatorios.validate(request.body);
  } catch (error) {
    return response.status(400).json(error.message);
  }
  try {
    const consulta = await knex("users").where({ email });

    if (consulta.length > 0) {
      return response
        .status(401)
        .json({ mensagem: "Já existe usuário com o e-mail informado." });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const insercao = await knex("users").insert({
      nome,
      email,
      senha: senhaCriptografada,
    });

    if (insercao.rowCount === 0) {
      return response
        .status(500)
        .json({ mensagem: "Não foi possível cadastrar o usuário." });
    }

    const usuario = await knex("users").where({ email }).first();

    const { senha: _, ...dadosUsuario } = usuario;

    return response.status(201).json(dadosUsuario);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = {
  createRegister
};
