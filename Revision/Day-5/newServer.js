const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SECRET = "adabdhaqydbchcvs"; 
const users = [];

app.use(express.json());

//Return a random long string
// Token Logic: 
// function generateToken(){
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', '1', '2', '3','4','5','6','7','8'];
//     let token = "";
//     for(let i = 0; i < 30; i++){
//         token += options[Math.floor((Math.random() * options.length))];
//     }
//     return token;
// }

app.get('/me', (req,res)=>{
    // const token = req.headers.token; (Token ) 
    const token = req.headers.token; // Will send jwt as a token as well
    const decodedInfo = jwt.verify(token, JWT_SECRET); // Will return JSON OBJECT : {username : username}
    const username = decodedInfo.username;
    const user = users.find(u=>u.username===username);
    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }else{
        res.json({
            message : "Sorry User Not Found"
        })
    }
})

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    });
    res.json({
        msg : "You have Completed Sign-UP"
    });
    console.log(users);
});

app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i = 0; i<users.length; i++){
        if(users[i].username===username && users[i].password===password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);
        // foundUser.token = token; (Token Storing)
        res.json({
            token : token
        })
    }else{
        res.json({
            message : "Invalid Username or Password"
        })
    }
    console.log(users);
});

app.listen(3000,()=>{
    console.log("App started on 3000")
});