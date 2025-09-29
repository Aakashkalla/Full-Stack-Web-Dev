const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.get('/admin',(req,res)=>{
    res.send("Hello Admin");
})

app.listen(port,()=>{
    console.log(`APP LISTENING ON ${port}`)
})