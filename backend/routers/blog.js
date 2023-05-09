const router = require('express').Router()
const jwt = require('jsonwebtoken')

//Modelos DB
const User = require('../models/User')
const Post = require('../models/Post')
const Category = require('../models/Category')
const { Model } = require('sequelize')

//middlewares
function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] //pegar apenas o token

    if (!token) {
        return res.status(402).json({ msg: 'Acesso negado.' })
    }

    try {
        const secret = process.env.HASH_SECRET
        jwt.verify(token, secret)
        next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: 'Token inválido.' })
    }
}

//publicas
router.get('/', (req, res) => {
    res.status(200).json({ nsg: 'Bem vindo a API.' })
})

//privadas
// - Blog = listar postagens (todas ou só do usuário, asc ou desc)
router.get('/posts', checkToken, async (req, res) => {
    //methodo get, pegar dados da query = dados em typeof string
    var { onlyMine, asc } = req.query

    //validação de campos
    if (onlyMine != "false" && onlyMine != 'true') {
        return res.status(422).json({ msg: 'Dado apenas as minhas postagens inválido.' })
    }
    if (asc != "false" && asc != 'true') {
        return res.status(422).json({ msg: 'Dado ordenação inválido.' })
    }

    //transformar string em booleans
    onlyMine = onlyMine == 'true' ? true : false
    asc = asc == 'true' ? true : false

    //se buscando só as minhas
    if (onlyMine) {
        //pegar id usuario pelo token
        const userId = getIdUserToken(req)

        await Post.findAll({ include: [User], where: { userId: userId }, order: [['updatedAt', asc == true ? 'ASC' : 'DESC']] })
            .then(async (posts) => {
                //Formatar dados
                posts = await FormatarPosts(posts)
                return res.status(200).json({ msg: posts })
            })
            .catch((error) => {
                console.log(error)
                return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
            })

    } else {//se buscando todas
        await Post.findAll({ include: [User], order: [['updatedAt', asc == true ? 'ASC' : 'DESC']] })
            .then(async (posts) => {
                //Formatar dados
                posts = await FormatarPosts(posts)
                return res.status(200).json({ msg: posts })
            })
            .catch((error) => {
                console.log(error)
                return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
            })

    }
})

// - Blog = cadastrar uma postagem
router.post('/posts', checkToken, async (req, res) => {
    const { title, content } = req.body
    const categoryId = Number(req.body.categoryId)

    //validação de campos
    if (title === "" || title === null || typeof title == 'undefined') {
        return res.status(422).json({ msg: 'Dado título inválido.' })
    }
    if (content === "" || content === null || typeof content == 'undefined') {
        return res.status(422).json({ msg: 'Dado conteúdo inválido.' })
    }
    if (isNaN(categoryId) || categoryId <= 0) {
        return res.status(422).json({ msg: 'Dado categoria inválido.' })
    }
    //categoria passada já está cadastrada no banco
    const category = await Category.findByPk(categoryId)
        .then()
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
    if (!category) {
        return res.status(422).json({ msg: 'Categoria não cadastrada.' })
    }

    //cadastrar postagem

    //pegar id usuario pelo token
    const userId = getIdUserToken(req)

    Post.create({
        title,
        content,
        userId: userId,
        categoryId
    }).then((post) => {
        return res.status(201).json({ msg: post })
    }).catch((error) => {
        //console.log(title, content, userId, categoryId)
        console.log(error)
        return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde....' })
    })

    console.log(!category)


})

// - Blog = editar uma postagem
router.put('/posts/:id', checkToken, async (req, res) => {
    const { title, content } = req.body
    const categoryId = Number(req.body.categoryId)
    const id = Number(req.params.id)

    //validação de campos
    if (isNaN(id) || id <= 0) {
        return res.status(422).json({ msg: 'Dado id inválido.' })
    }
    if (title === "" || title === null || typeof title == 'undefined') {
        return res.status(422).json({ msg: 'Dado título inválido.' })
    }
    if (content === "" || content === null || typeof content == 'undefined') {
        return res.status(422).json({ msg: 'Dado conteúdo inválido.' })
    }
    if (isNaN(categoryId) || categoryId <= 0) {
        return res.status(422).json({ msg: 'Dado categoria inválido.' })
    }
    //categoria passada já está cadastrada no banco
    const category = await Category.findByPk(categoryId)
        .then()
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
    if (!category) {
        return res.status(422).json({ msg: 'Categoria não cadastrada.' })
    }

    var post = await Post.findByPk(id)
        .then()
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
    //existe esse post?
    if (!post) {
        return res.status(422).json({ msg: 'Postagem não cadastrada.' })
    }
    //essa postagem é minha?
    const userId = getIdUserToken(req)
    if (post.dataValues.userId != userId) {
        return res.status(422).json({ msg: 'Não tem permissão paara alterar essa postagem.' })
    }

    //atualizar postagem
    Post.update({
        title,
        content,
        categoryId
    }, {
        where: {
            id: id
        }
    }).then(() => {
        return res.status(200).json({ msg: 'Atualizado com sucesso.' })
    })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
})

// - Blog = listar uma postagem pelo id
router.get('/posts/:id', checkToken, async (req, res) => {
    const id = Number(req.params.id)
    //validação de campos
    if (isNaN(id) || id <= 0) {
        return res.status(422).json({ msg: 'Dado id inválido.' })
    }

    var post = await Post.findByPk(id, { include: [User] })
        .then()
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
    //existe esse post?
    if (!post) {
        return res.status(422).json({ msg: 'Postagem não cadastrada.' })
    }

    //formatar post
    post = await formatarPost(post)

    return res.status(200).json({ msg: post })
})

// - Blog = deletar uma postagem pelo id
router.delete('/posts/:id', checkToken, async (req, res) => {
    const id = Number(req.params.id)

    //validação de campos
    if (isNaN(id) || id <= 0) {
        return res.status(422).json({ msg: 'Dado id inválido.' })
    }
    const post = await Post.findByPk(id)
        .then()
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
    //existe esse post?
    if (!post) {
        return res.status(422).json({ msg: 'Postagem não cadastrada.' })
    }
    //essa postagem é minha?
    const userId = getIdUserToken(req)
    if (post.dataValues.userId != userId) {
        return res.status(422).json({ msg: 'Não tem permissão paara alterar essa postagem.' })
    }

    //excluir
    post.destroy()
        .then(() => {
            return res.status(200).json({ msg: 'Excluído com sucesso.' })
        })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
})

// - Blog = listar categorias
router.get('/posts-categories', checkToken, async (req, res) => {
    await Category.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
        .then((categories) => {

            return res.status(200).json({ msg: categories })
        })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })
})

async function formatarPost(Post) {
    Post.dataValues.createdAt = formatter.format(Post.dataValues.createdAt)
    Post.dataValues.updatedAt = formatter.format(Post.dataValues.updatedAt)
    delete Post.dataValues.user.dataValues.id
    delete Post.dataValues.user.dataValues.password
    delete Post.dataValues.user.dataValues.createdAt
    delete Post.dataValues.user.dataValues.updatedAt
    //adicionar nome d categoria
    const category = await Category.findByPk(Post.dataValues.categoryId).then()
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })

    Post.dataValues.categoryName = category.dataValues.name

    return Post
}

const formatter = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo',
})

async function FormatarPosts(Posts) {
    //buscar categorias
    const categories = await Category.findAll().then()
        .catch((error) => {
            console.log(error)
            return res.status(500).json({ msg: 'Ocorreu um erro. Tente novamente mais tarde.' })
        })

    Posts.forEach(post => {
        //formatar datas
        post.dataValues.createdAt = formatter.format(post.dataValues.createdAt)
        post.dataValues.updatedAt = formatter.format(post.dataValues.updatedAt)
        //remover dados desnecessários
        delete post.dataValues.user.dataValues.id
        delete post.dataValues.user.dataValues.password
        delete post.dataValues.user.dataValues.createdAt
        delete post.dataValues.user.dataValues.updatedAt

        categories.forEach(category => {
            //adicionar nome da categoria
            if (category.dataValues.id == post.dataValues.categoryId) {
                post.dataValues.categoryName = category.name
            }
        });
    });
    return Posts
}

function getIdUserToken(req) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] //pegar apenas o token
    const decodedToken = jwt.decode(token);
    return decodedToken.id;
}

module.exports = router;