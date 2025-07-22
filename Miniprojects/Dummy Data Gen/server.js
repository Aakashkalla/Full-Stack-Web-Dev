import express from 'express';
import mongoose from 'mongoose';
import Employee from './model/employee.js';
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000;

app.set('view engine','ejs');

const getRandom=(arr)=>{
     let rand = Math.floor(Math.random() *(arr.length));
     return arr[rand];
}

app.get('/',(req,res)=>{
    res.render('index', {foo: 'FOO'})
});

app.get('/generate',async(req,res)=>{
    await Employee.deleteMany({})

    let randomNames=['Rohan','Sohan',"Aashish","Shashi","Brijesh","Aakash"]
    let randomCities=['Delhi','Kolkata',"Jamshedpur","Patna","Pune","Mumbai"]
    let randomLang=['C','C#','Java','GO','Python','JavaScript']
    for(let i =0;i<10;i++){
        let e = await Employee.create({
            name:getRandom(randomNames),
            salary: Math.floor(Math.random()*2000000),
            language: getRandom(randomLang),
            city : getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
    }
    res.json({ message: "10 employees generated and database cleared successfully!" });
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});