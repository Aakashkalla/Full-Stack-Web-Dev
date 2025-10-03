const express = require("express");

const app = express();

const users = [];

app.use(express.json());

//Return a random long string
function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', '1', '2', '3','4','5','6','7','8'];
    let token = "";
    for(let i = 0; i < 30; i++){
        token += options[Math.floor((Math.random() * options.length))];
    }
    return token;
}
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

app.get('/me', (req,res)=>{
    const token = req.headers.authorization;
})

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
        const token = generateToken();
        foundUser.token = token;
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