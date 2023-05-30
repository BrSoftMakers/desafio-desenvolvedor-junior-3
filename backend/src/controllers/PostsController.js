const  database = require('../db/models');

class PostsController {
    static async criarPostagem(req, res) {
        const { title, conteudo } = req.body;
        const { usuarioAutenticado } = req;

        try{
            const novaPostagem = await Posts.create({title, conteudo, usuarios_id: usuarioAutenticado.id});
            return res.status(200).json(novaPostagem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor '});
        }
 
    }

    static async pegaTodosOsPosts(req, res) {
        try {
            const todosOsPosts = await database.Posts.findAll();
            return res.status(200).json(todosOsPosts);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmPost(req, res) {
        const { id } = req.params;
        try {
            const umPost = await database.Posts.findOne( { where: { id: Number(id) }});
            return res.status(200).json(umPost);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async editaUmPost(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Posts.update(novasInfos, { where: { id: Number(id) }});
            const postAtualizado = await database.Posts.findOne( { where: { id: Number(id) }});
            return res.status(200).json(postAtualizado);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async deletarPost(req, res) {
        const { id } = req.params;
        try{
            await database.Posts.destroy({ where: { id: Number(id) }});
            return res.status(200).json({ mensagem: `post com ${id} deletado`})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PostsController;