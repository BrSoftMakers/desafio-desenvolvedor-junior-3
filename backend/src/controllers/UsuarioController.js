const jwt = require('jsonwebtoken');
const database = require('../db/models').Usuarios;
require('dotenv').config();


const tokenSecret = process.env.TOKEN_SECRET;

class UsuarioController {

    static async cadastrarUsuario(req, res) {
        const { nome, username, password, email, ativo } = req.body;

        try {
            //verificar se usuario já existe no banco de dados
            const usuarioExiste = await database.findOne({ where: { email } });

            if(usuarioExiste) {
                return res.status(400).json({ error: 'Usuário já cadastrado '});
            }

            //criando novo usuario
            const  novoUsuarioCadastrado = await database.create({ nome, username, password, email, ativo });
            res.status(200).json(novoUsuarioCadastrado);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async atualizaUsuario(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Usuarios.update(novasInfos, { where: { id: Number(id) }});
            return res.status(200).send('Usuario atualizado com sucesso');
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async deletarUsuario(req, res) {
        const { id } = req.params;
        try{
            await database.destroy({ where: { id: Number(id) }});
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async validaUsuarioParaLogin(req, res) { //Funcao para autenticar usuario
        try{
            const { username, password } = req.body;
            const usuario = await database.findOne({ where: { username: username }});
            if(!usuario){ //Verificando se usuario existe no banco de dados
                return res.status(401).json({ error: 'Usuário nao encontrado'});
            }

            //trocar metodo findOne pelo metodo comparePassword
            const senhaDigitada = await database.findOne({ where: { password: password }});
            if(!senhaDigitada) { // Verificando se a senha é válida
                return res.status(401).json({ error: 'Senha inválida' });
            }

            const token = jwt.sign({ usuario: usuario.id }, tokenSecret, { expiresIn: '1h' })

            return res.status(200).json({token});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }
}

module.exports = UsuarioController;