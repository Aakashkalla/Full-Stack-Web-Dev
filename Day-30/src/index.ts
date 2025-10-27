let ab = 19;
console.log(ab)

function greet(name : string){
    console.log(`Hey ${name}`)
}
greet("Aakash");

const greetings = (name : string)=>{
    console.log(`Hey ${name}`)
}
greetings('Aakash')

function sum(a : number, b : number) : number {
    return a + b
}
console.log(sum(1, 2));

const ageCheck = (age : number) : string=>{
    if(age<18){
        return "Can't vote"
    }else{
        return "You can vote"
    }
}
console.log(ageCheck(12));

function delay(fn : ()=> void){
    setTimeout(fn,1000)
}
function logs(){
    console.log('Hey Logged After 1 sec')
}
delay(logs)

function Greetings(user:User){
    console.log("Hello " + user.name);
}

interface User  {
    name : string,
    age : number,
    address? : {
        country : string,
        city : string,
        pincode : number
    } // address here is an optional field that is why its showing no compile errors and it is denoted by '?'

}

Greetings({
    name : "OI OI OI",
    age : 21
})

interface People{
    name : string, 
    age : number,
    greet : () => string
}

const person : People   = { 
    name : "Aakash",
    age : 21,
    greet : () => {
        return `Hi I am ${person.name} and my age is ${person.age}`
    }
}


class Guy implements People{
    name : string;
    age : number; 
    greet : ()=> string ;
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
        this.greet = () =>{
            return `Hello, My Name is ${this.name} and I am ${this.age} years old`
        }
    }
}

const aakash = new Guy("Aakash", 21);
console.log(aakash.greet())

type Employee = {
    name : string,
    age : number
}

type Manager = {
    name : string,
    department : string
}

type TeamLead = Employee & Manager

let user : TeamLead  = {
    name : "Aakash",
    age : 21,
    department : "IT"
}

type Client = {
    name : string,
    course_bought : string
}

type Admin = {
    name : string, 
    course_created : string
}

type Common = Client | Admin

let a : Common = {
    name : 'aakash',
    course_bought : "MERN STACK"
}
console.log(`${a.name} and ${a.course_bought}`)
console.log(`${user.age} ${user.name} ${user.department}`)