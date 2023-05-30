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

  var email = req.body.email
  var password = req.body.password

  User.findOne({
    wheres: {
      email: email
    }
  }).then(user => {
    if(user != undefined){
      console.log(email)
      console.log(password)
      var correct = bcrypt.compareSync(password, user.password)
      
      if(correct == true){
        res.status(200).send('User loged')
        
      }else{
        res.status(404).send('Error')
      }
    }else{
      res.status(404).send('Error')
    }
  })
}



//LOGIN DE USUÁRIOS

module.exports = {
  registerUser,
  login
};
