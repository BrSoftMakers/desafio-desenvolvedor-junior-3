const User = require("../database/models/user");
const bcrypt = require("bcrypt");





async function registerUser(req, res) {
  const email = await req.body.email
  const password = await req.body.password

  console.log(req.body)
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

/*   res.status(201).send("tudo ok"); */
}

module.exports = {
  registerUser,
};
