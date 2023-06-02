const { response } = require("express");
const Post = require("../database/models/posts");

// ADD POSTS
function addPost(req, res) {
  Post.create({
    title: req.body.title,
    body: req.body.body,
  })
    .then(() => {
      res.status(201).send("Success!");
    })
    .catch(() => {
      res.status(201).send("Success!");
    });

  res.status(400);
}

// GET POSTS
async function getPost(req, res) {
  const dados = await Post.findAll();

  if (!dados) {
    res.status(400);
  } else {
    res.status(200).send(dados);
  }
}

//DELETE POSTS
async function deletePost(req, res) {
  let titlePost = req.params.title;
  console.log(titlePost);

  if (titlePost != undefined) {
    Post.destroy({
      where: {
        title: titlePost,
      },
    })
      .then(() => {
        res.status(200).send("ok");
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}

// EDIT POST
async function editPost(req, res) {
  console.log(req.body);

  await Post.update(
    {
      title: req.body.newTitle,
      body: req.body.body,
    },
    {
      where: {
        title: req.body.oldTitle,
      },
    }
  );
  const posts = await Post.findAll();
  res.status(200).send(posts);
}

//VIEW UNIQUE POST
async function viewPost(req, res) {
  let id = req.params.id;

  await Post.findOne({
    where: {
      id: id,
    },
  })
    .then((post) => {
      if (!post) {
        res.status(400);
      }
      res.send(post);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  addPost,
  getPost,
  deletePost,
  editPost,
  viewPost,
};
