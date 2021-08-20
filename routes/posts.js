const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.json({
        titulo: 'bora bora',
        cometeudo: 'asjoaijsio'
    })
})

module.exports = router;