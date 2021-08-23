const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');//criptografar a senha

//Registro
router.post('/register', async (req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);//criptografando a senha
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,//adiciona a senha criptgrafada no banco
        })

        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//login
router.post('/login', async (req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json('Senha incorreta!')

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json('Senha incorreta!')

        const {password, ...others} = user._doc;
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router