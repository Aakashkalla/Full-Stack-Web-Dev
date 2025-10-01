const express = require("express");
const app = express();

var users = [{
    name: 'John',
    kidneys:[{
        healthy: false
    },{
        healthy : true
    }]
}];

app.use(express.json());

app.get('/', function(req,res){
    const totalKidneys = users[0].kidneys.length;
    const kidneys = users[0].kidneys;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<kidneys.length;i++){
        if(kidneys[i].healthy==true){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = totalKidneys - numberOfHealthyKidneys; 
    res.json({
        numberOfUnhealthyKidneys, numberOfHealthyKidneys, totalKidneys
    }) 
})

app.post('/', function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:`Added ${isHealthy} Kidney` 
    })
})

app.put('/', function(req,res){
    for(let i = 0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({
        msg:"All Your Kidneys are Healthy"
    })
    
})

app.delete('/', function(req,res){
    const newKidneys = [];
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push(users[0].kidneys[i])
        }
    }
    if(newKidneys.length===users[0].kidneys.length){
        res.status(411).json({
            msg:"You dont have any unhealthy Kidneys"
        })
    }
    else{
        users[0].kidneys = newKidneys
        res.json({
            msg : users[0].kidneys
        })
    }
})

app.listen(3001,()=>{
    console.log("APP LISTENING ON PORT 3001")
})