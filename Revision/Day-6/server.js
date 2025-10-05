const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "dabjdbadvaghdadvcghvzgda";
const app = express();

const users= [];
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/signup', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username : username,
        password : password
    })

    res.json({
        message : "You have completed signup"
    })
});

app.post('/signin', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);
    if(user){
        const token = jwt.sign({
            username : username
        }, JWT_SECRET)
        res.json({
            token : token
        })
    }else{
        res.json({
            message : "Invalid Username or Password"
        })
    }

});

function auth(req,res,next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    if(decodedInfo.username){
        req.username = decodedInfo.username;
        next();
    }else{
        res.json({
            message : "You are not logged In"
        })
    }
}
app.get('/me',auth,  (req,res)=>{
        const user = users.find(user=> user.username===req.username);
        res.json({
            username : user.username,
            password : user.password
        })
});

app.listen(3000, ()=>{
    console.log("App Started")
})