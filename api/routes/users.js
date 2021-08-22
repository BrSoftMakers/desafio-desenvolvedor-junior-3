const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt')

//Delete
router.delete('/:id', async (req, res)=>{
    if(req.body.userId === req.params.id){//comporando se são o mesmo usuario
        try{
            const user = await User.findById(req.params.id)
            try{
                await Post.deleteMany({username:user.username})//Deletar primeiro as postagens para depois o usuario
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json('Usuário deletado...');
            }catch(err){
                res.status(500).json(err)
            }
        } catch(err) {
            res.status(404).json('Usuario não encontrado')
         }
        }
        else{
            res.status(401).json('Não pode deletar! Não é sua conta')
        } 
});

//Adicionar
router.put('/:id', async (req, res)=>{
    if(req.body.userId === req.params.id){//comporando se são o mesmo usuario
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)//permitir a atualização de senha, depois criptografar
        }     
        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id, {//id do usuario qu está no banco de dados
                $set:req.body,
            },
            { new: true });
            res.status(200).json(updateUser);
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json('Não pode adicionar! Não é sua conta')
    } 
})

//Pegar um usuario
router.get('/:id', async (req, res) =>{
    try{
        const user = await User.findById(req.params.findById);//encontrar o usuario por ID
        const { password, ...others } = user._doc//para não ver a senha do usuario
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
});


module.exports = router