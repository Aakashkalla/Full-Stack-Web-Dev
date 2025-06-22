let student = {
    "name": "Aakash",
    "phone number": 98354,
    "marks": 98
}
console.log(student);

let obj ={
    name:"Aakash",
    age:29
}
for (const key in obj){
    const element = obj[key];
    const element2= key;
    console.log(element);
    console.log(element2);
}
let i = 1;
while(i<6){
    console.log(i);
    i++
}
function nice(name){
    console.log("Hey " + name );
    console.log("Whats your age " + name);
}
nice("Aakash");

Name="dif";
function sum(a,b){
    if(Name=="dif"){
        console.log(a + b);
    }
    else{
        console.log(a-b);
    }
}
function sum1(a,b){
    if(Name!="dif"){
        return a + b;
    }
    else{
        return a - b ;
    }
}

sum(8,9);

result = sum1(10,17);
console.log("The result will be:" + result);

const func1=(x)=>{
    console.log(x);
}
func1(34);
func1("Aakash");
func1(340);