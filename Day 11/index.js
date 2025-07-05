let f = document.getElementsByClassName("box");
f[2].style.backgroundColor= "red"; 
let ff = document.getElementById("redbox");
ff.style.backgroundColor="red";
ff.style.color="white";
document.querySelector(".box").style.backgroundColor="green";
// One more way to style all the particular class elements:
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.color="White";
//     e.style.backgroundColor="blue";
// })