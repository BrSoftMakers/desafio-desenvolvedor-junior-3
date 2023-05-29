const User = require("../database/models/user");
const bcrypt = require("bcrypt");



// CADASTRO DE USUÁRIOS
async function registerUser(req, res) {
  const email = await req.body.email;
  const password = await req.body.password;
  // verificação de duplicidade
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (user == undefined) {
      //hash da password
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.status(201).send("Success!");
        })
        .catch(() => {
          res.status(201).send("Success!");
        });
    } else {
      res.status(400).send("ERROR");
    }
  });
}


 function login(req, res) {
  const email = req.body.email
  const password =  req.body.password

  console.log(email, password)
  res.status(200).send('logado com sucesso')
}



//LOGIN DE USUÁRIOS

module.exports = {
  registerUser,
  login
};
