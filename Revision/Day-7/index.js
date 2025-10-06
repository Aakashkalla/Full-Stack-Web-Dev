const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "jjajhad72798ybdabdajh";
const {UserModel, TodoModel} = require('./db');
const mongoose = require('mongoose');
const app = express();

async function connect(){
    await mongoose.connect('mongodb+srv://aakashpradeepkalla:UNeXgBCnpWJX52Jj@cluster0.e8moafn.mongodb.net/todo-app-db');
    console.log("CONNECTED WITH DB");
}
connect();

app.use(express.json());

app.post('/signup', async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email : email,
        password : password,
        name : name
    });

    res.json({
        message : "You have succesfully Signed Up"
    })
});

app.post('/login', async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET)
        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message : "Invalid Username or Password"
        })
    }

});

function auth(req,res,next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET)
    if(decodedInfo){
        req.userId = decodedInfo.id
        next();
    }else{
        res.json({
            message : "INVALID TOKEN"
        })
    }
}

app.post('/todo', auth, async (req,res)=>{
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.userId

    await TodoModel.create({
        title : title,
        done : done,
        userId : userId
    });
    res.json({
        message : "Added Todo"
    })
});

app.get('/todos', auth, async (req,res)=>{
    const userId = req.userId
    const todos = await TodoModel.find({
        userId : userId
    })
    res.json({
        tile : todos[0].title,
        done : todos[0].done
    })
});

app.listen(3000, ()=>{
    console.log("App Started at 3000")
})