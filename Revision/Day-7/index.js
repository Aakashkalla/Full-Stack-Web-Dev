require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = `${process.env.JWT_SECRET}`;
const {UserModel, TodoModel} = require('./db');
const mongoose = require('mongoose');
const { z } = require('zod')
const app = express();

async function connect(){
    await mongoose.connect(`${process.env.DB_URL}`);
    console.log("CONNECTED WITH DB");
}
connect();

app.use(express.json());

app.post('/signup', async (req,res)=>{
    //Adding Input Validation (Using Zod)
    const requiredBody = z.object({
        email: z.email(),
        password : z.string().min(3).max(30),
        name : z.string().min(3).max(100)
    });
    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Incorrect Format",
            error : parsedDataWithSuccess.error
        })  
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let thrownError = false;
    try{
        const hashedPassword = await bcrypt.hash(password, 7);

        await UserModel.create({
            email : email,
            password : hashedPassword,
            name : name
        });
    }catch(e){
        res.json({
            message : "User Already Exists"
        })
        thrownError = true;
    }

    if(!thrownError){
        res.json({
            message : "You have succesfully Signed Up"
        })
    }
});

app.post('/login', async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
    })

    if(!user){
        res.status(403).json({
            message : 'User not found'
        })
        return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
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
        todos : todos
    })
});

app.listen(3000, ()=>{
    console.log("App Started at 3000")
})