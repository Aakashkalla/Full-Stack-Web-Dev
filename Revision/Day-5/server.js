const express = require("express");
const app = express();
const cors = require("cors");
let requestCount = 0;

function requestTracker(req,res,next){
    requestCount += 1;
    console.log(requestCount);
    next();
}

function tracker(req,res,next){
    console.log(`Method : ${req.method}`);
    console.log(`URL: ${req.originalUrl}`);
    console.log(new Date());
    next();
}
app.use(express.json());
app.use(cors());
app.use(tracker);
app.use(requestTracker);

app.get("/multiply", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer : a * b
    });
})

app.get("/add", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer : a+b
    });
})

app.get("/subtract", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer : a-b
    });
})

app.get("/divide", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(b===0){
        res.json({ERROR : "Divison Not allowed"})
    }else{
        res.json({
            answer : a/b
        });
    }
})

app.post("/sum",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        answer : a + b
    });
})

app.listen(3000, ()=>{
    console.log("App Listening on 3000")
})