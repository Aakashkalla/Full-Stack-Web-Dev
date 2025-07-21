const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Welcome to blog hduihqu');
})

router.get('/post1',(req,res)=>{
    res.send('Welcome to post1');
})

module.exports = router