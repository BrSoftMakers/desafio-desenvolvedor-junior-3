const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const connection = require("./database/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(postRoutes);

// verify connection with database
connection
  .authenticate()
  .then(() => {
    console.log("Conection with database estabilished!");
  })
  .catch((e) => {
    console.log(`ERR: ${e}`);
  });

app.listen(8000, () => {
  console.log("Server on: http://localhost:8000");
});
