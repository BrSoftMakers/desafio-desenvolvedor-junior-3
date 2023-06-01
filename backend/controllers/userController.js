const User = require("../database/models/user");
const bcrypt = require("bcrypt"); 


// CADASTRO DE USUÁRIOS
async function registerUser(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var salt  = bcrypt.genSaltSync(10)
  var  hashedPassword = bcrypt.hashSync(password, salt)

  await User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    if(user == undefined){
      User.create({
        email: email,
        password: hashedPassword
      }).then(() => {
        res.status(200).send('Success')
      }).catch(err => {
        res.status(500).send('error: ' + err)
      })
    }else{
      res.status(500).send('Error: Existing account')
    }
  })
}

async function login(req, res) {
  var email = req.body.email
  var password = req.body.password

/*   bcrypt.compare(password, hash, function(err, result){
    res.send(err, result)
  }) */

  await User.findOne({
    where:{
      email:email
    }
  }).then(user => {
    console.log(user)
    const correct = bcrypt.compareSync(password, user.password)
    if(user != undefined){
      res.status(200).send(correct)
    }else{
      res.status(404).send(correct)
    }
  }).catch(err => {
    res.status(404).send('Email or password is wrong')
  })
/*   await User.findOne({
    wheres: {
      email: email
    }
  }).then(user => {
    if(user != undefined){
      console.log(email)
      console.log(password)
      var correct = bcrypt.compareSync(password, user.password)
      
      if(correct == true){
        req.session.user = {
          id: user.id,
          email: user.email
        }
        res.status(200).send('success')
      }else{
        res.status(400).send('error' + correct)
      }
    }else{
      res.status(400).send('error' )
    }
  }) */
}

//LOGIN DE USUÁRIOS

module.exports = {
  registerUser,
  login,
};
