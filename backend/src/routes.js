const express = require("express");
const { Login } = require("./controllers/login");
const { createPost } = require("./controllers/posts/createPost");
const { deletePosts } = require("./controllers/posts/deletePosts");
const { detailPosts } = require("./controllers/posts/detailPosts");
const { readPost } = require("./controllers/posts/readPost");
const { updatePosts } = require("./controllers/posts/updatePosts");
const { createRegister } = require("./controllers/register");

const router = express();

router.post("/register", createRegister);
router.post("/login", Login);
router.post("/posts", createPost);
router.get("/posts", readPost);
router.get("/posts/:id", detailPosts);
router.put("/posts/:id", updatePosts);
router.delete("/posts/:id", deletePosts);

module.exports = router;
