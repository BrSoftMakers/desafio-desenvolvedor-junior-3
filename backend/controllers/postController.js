const Post = require('../database/models/posts')


// ADD POSTS
function addPost(req,res) {
    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then(() => {
        res.status(201).send("Success!");
      })
      .catch(() => {
        res.status(201).send("Success!");
      });

    res.status(400)
}


// GET POSTS
async function getPost(req, res){
    const dados = await Post.findAll()

    if (!dados ){
        res.status(400)
    }else{
        res.status(200).send(dados)

    }
}


module.exports = {
    addPost,
    getPost
}