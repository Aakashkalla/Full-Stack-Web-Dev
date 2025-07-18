const box = document.querySelector('.box');
const changecolor=document.getElementById('color');
const changebackground=document.getElementById('background');
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
changecolor.addEventListener("click", function () {
    box.style.color = getRandomColor();
     
});

changebackground.addEventListener("click", function () {
    box.style.backgroundColor = getRandomColor();
    
});

