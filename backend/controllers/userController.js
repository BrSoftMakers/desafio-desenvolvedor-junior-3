const User = require("../database/models/user");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

const SECRETE = "sldgij04n48*&%ed&%c&u%df";

// CADASTRO DE USUÁRIOS
async function registerUser(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt);

  await User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (user == undefined) {
      User.create({
        email: email,
        password: hashedPassword,
      })
        .then(() => {
          res.status(200).send("Success");
        })
        .catch((err) => {
          res.status(500).send("error: " + err);
        });
    } else {
      res.status(500).send("Error: Existing account");
    }
  });
}

//LOGIN
async function login(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  await User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      const correct = bcrypt.compareSync(password, user.password);
      if (user != undefined) {
       sign(
          { email: user.email, id: user.id },
          SECRETE,
          { expiresIn: "24h" },
          (err, token) => {
            if (err) {
              res.status(400);
              res.json(err + "falha interna");
            } else {
              res.status(200);
              res.json(token);
              //res.send("token: " + token);
            }
          }
        );
      } else {
        res.status(404).send(correct);
      }
    })
    .catch((err) => {
      res.status(404).send("Email or password is wrong");
    });
}

async function logout(req,res) {
  res.status(200)
}



//AUTH
async function verifyToken(req, res) {
  const { token } = req.body;

  try {

    const isTokenValidate = await verify(token, SECRETE);
  
    if(!isTokenValidate) {
      console.log(isTokenValidate, 4);
      
    }
  
    return res.status(200).json({ isToke: true })

  } catch {
    return res.status(403).json({ err: "Token is not validate! :/" })
  }
}


module.exports = {
  registerUser,
  login,
  verifyToken, 

};
