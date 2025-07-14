console.log("Hello World")
const  box = document.querySelector(".container").innerHTML
console.log(box)
console.log("Heyllow")
let div = document.createElement("div");
div.innerHTML= "I have been inserted <b>by aakash</b>"
div.setAttribute("class","created");
document.querySelector(".container").append(div);
let constz = document.querySelector(".container")
constz.insertAdjacentHTML("afterend","<b>Hey lol i am under the water please helppp meeee</b>");