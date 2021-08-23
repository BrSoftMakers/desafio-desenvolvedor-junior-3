const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//Criar postagens
router.post('/', async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost)
    }catch(err){
        res.status(500).json(err);
    }
})

//Adicionar poste
router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,//setando novos valores
            },
            { new: true }//mostrando os novos valores
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("Você atualizou o seu poste");
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

//Delete post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Poste foi deletado...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("Você não pode deletar esse poste");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
//Pegar poste
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//pegar varios postes
router.get("/", async (req, res) => {
    const username = req.query.user;//olharmos o valor depois da igualdade '?user=categoria
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username:username });//busca os postes por nome
      } else if (catName) {
        posts = await Post.find({categories: {$in: [catName],//busca os postes por categoria
        },
        });
      } else {
        posts = await Post.find();//caso não tenha nem categoria nem usuario, retorne todos os postes
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router