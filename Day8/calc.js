let r = Math.random();
console.log(r);
let a = prompt("Enter First Number");
let c = prompt("Enter Operation");
let b = prompt("Enter Second Number");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(r>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}