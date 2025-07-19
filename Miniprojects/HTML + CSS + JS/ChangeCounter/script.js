let count = 0; 
let decrease = document.getElementById('Dec'); 
let reset = document.getElementById('Reset'); 
let increase = document.getElementById('Incr');
let display = document.getElementById('Box');

function updateColor(){
    if(count==0) display.style.backgroundColor="grey"
    if(count<0) display.style.backgroundColor="red"
    if(count>0) display.style.backgroundColor="green"
}
decrease.addEventListener("click", ()=>{
    count--;
    display.textContent=count;
    updateColor();
})
increase.addEventListener("click", ()=>{
    count++;
    display.textContent=count;
    updateColor();
})
reset.addEventListener("click", ()=>{
    count=0;
    display.textContent=count;
    updateColor();
})

