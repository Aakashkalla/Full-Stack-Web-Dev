let randomcolor = {
    a: "blue",
    b: "red",
    c: "green",
    d: "yellow",
    e: "orange"
};

let randombackground = {
    a: "pink",
    b: "green",
    c: "red",
    d: "orange",
    e: "yellow"
};

let colorKeys = Object.keys(randomcolor);
let bgKeys = Object.keys(randombackground);

let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    
    let randColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    let randBgKey = bgKeys[Math.floor(Math.random() * bgKeys.length)];

    
    let rc = randomcolor[randColorKey];
    let rbg = randombackground[randBgKey];


    boxes[i].style.backgroundColor = rbg;
    boxes[i].style.color = rc;
}
