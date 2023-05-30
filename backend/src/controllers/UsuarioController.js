const database = require('../db/models').Usuarios;

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
            await database.Usuarios.destroy({ where: { id: Number(id) }});
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async validaUsuarioParaLogin(req, res) { //Funcao para autenticar usuario
        try{
            const { username, password } = req.body;
            const user = await database.findOne({ where: { username: username }});
            if(!user){ //Verificando se usuario existe no banco de dados
                return res.status(401).json({ error: 'Usuário nao encontrado'});
            }

            //ARRUMAR METODO DE VALIDAR SENHA DEPOIS(ESTÁ INCORRETO A VALIDACAO E CONEXAO)
            const isPasswordValid = await database.findOne({ where: { password: password }});
            if(!isPasswordValid) { // Verificando se a senha é válida
                return res.status(401).json({ error: 'Senha inválida' });
            }

            return res.status(200).json({ message: "Login bem sucedido" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }
}

module.exports = UsuarioController;