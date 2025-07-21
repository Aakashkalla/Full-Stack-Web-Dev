const express = require('express');
const blog = require('./routes/blog')
const app = express();
const port = 3000
const fs = require("fs");

app.use(express.static('public'))
app.use('/blog',blog)

app.use((req,res,next)=>{
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    next()
})

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/about',(req,res)=>{
    res.send('About us')
})
app.get('/contact',(req,res)=>{
    res.send('Contach me At @')
})

app.get('/blog',(req,res)=>{
    res.send('Hello blog')
})

app.get('/blog/:slug',(req,res)=>{
    res.send(`Hey ${req.params.slug}`)
})

app.post('/',(req,res)=>{
    console.log("Hey post req")
    res.send('Hello world post')
})

app.get('/index',(req,res)=>{
    res.sendFile('template/index.html',{root:__dirname})
})

app.get('/api',(req,res)=>{
    res.json({a:1, b:2, c:3, name1:["aakash","jerry"]})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
