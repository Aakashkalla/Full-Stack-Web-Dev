const express = require("express");

const app = express();
let requestCount = 0;

app.use(function(req,res,next){
    requestCount = requestCount + 1;
    next();
})
function isOldEnoughMiddleWare(req,res,next){
    const age = req.query.age;
    if(age>=14) next();
    else{
        res.json({
            msg: "Sorry you are not allowed"
        })
    }
}

app.use(isOldEnoughMiddleWare)

app.get("/ride1",(req,res)=>{    
        res.json({
            msg: "You have successfully riden the ride 1"
        })
})

app.get("/ride2",(req,res)=>{
        res.json({
            msg: "You have successfully riden ride 2"
        })
})

app.get("/requestCount",(req,res)=>{
    res.json({msg:`requestCount : ${requestCount}`})
})

app.listen(3000, ()=>{
    console.log("Server Started at 3000")
})