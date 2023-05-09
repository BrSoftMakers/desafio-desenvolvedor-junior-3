const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Modelos DB
const User = require('../models/User')

//registrar
router.post('/register', async(req, res) =>{
    const {name, email, password, confirmpassword} = req.body
    //validações de campos
    if(!name){
        return res.status(422).json({msg: 'O nome é obrigatório.'})
    }
    if(!email){
        return res.status(422).json({msg: 'O email é obrigatório.'})
    }
    if(!password){
        return res.status(422).json({msg: 'A senha é obrigatória.'})
    }
    if(password != confirmpassword){
        return res.status(422).json({msg: 'As senhas não conferem.'})
    }
    //verificar se email já foi usado
    const userExist = await User.findOne({where: {email: email}})
    if(userExist){
        return res.status(422).json({msg: 'Este e-mail já fui utilizado em outro cadastro.'})
    }
    //criar hash senha
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    //criar usuário
    User.create({
        name,
        email,
        password: passwordHash
    }).then(()=>{
        return res.status(201).json({msg: 'Usuario criado com sucesso.'})
    }).catch((error)=>{
        console.log(error)
        return res.status(500).json({msg: 'Ocorreu um erro. Tente novamente mais tarde.'})
    });
})

//login
router.post('/login', async (req, res)=> {
    const {email, password} = req.body

    //validação de campos
    if(!email){
        return res.status(422).json({msg: 'O email é obrigatório.'})
    }
    if(!password){
        return res.status(422).json({msg: 'A senha é obrigatória.'})
    }
    //verificar se conta existe
    const user = await User.findOne({where: {email: email}})
    if(!user){
        return res.status(404).json({msg: 'E-mail não pertence a uma conta cadastrada.'})
    }
    //verificar se a senha combina
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword){
        return res.status(422).json({msg: 'Senha inválida.'})
    }

    //gerar token
    try {
        const secret = process.env.HASH_SECRET
        const token = jwt.sign({
            id: user.id
        }, secret)

        res.status(200).json({msg: "Login realizado com sucesso", token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: 'Ocorreu um erro. Tente novamente mais tarde.'})
    }
})

module.exports = router;