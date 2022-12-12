const knex = require("../connect");
const yup = require("yup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (request, response) => {
    const { email, senha } = request.body;
  
    const dadosObrigatorios = yup.object().shape({
      email: yup
        .string()
        .email({ mensagem: "Você não digitou um e-mail válido" })
        .max(60, { mensagem: "O campo e-mail não aceita mais de 60 caracteres" })
        .required({ mensagem: "É necessário informar o e-mail do usuário" }),
      senha: yup
        .string()
        .required({ mensagem: "É necessário informar a senha do usuário" }),
    });
  
    try {
      await dadosObrigatorios.validate(request.body);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  
    try {
      const usuario = await knex("users").where({ email }).first();
  
      if (!usuario) {
        return response.status(404).json({ mensagem: "Usuário não encontrado." });
      }
  
      const senhaVerificada = await bcrypt.compare(senha, usuario.senha);
  
      if (!senhaVerificada) {
        return response
          .status(401)
          .json({ mensagem: "Usuário e/ou senha inválido(s)." });
      }
  
      const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
        expiresIn: "8h",
      });
  
      const { senha: _, ...dadosUsuario } = usuario;
  
      return response.status(201).json({
        usuario: dadosUsuario,
        token,
      });
    } catch (error) {
      return response.status(500).json(error.message);
    }
  };

  module.exports = {
    Login
  };
  