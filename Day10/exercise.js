let adj ={
    adj1:"Amazing",
    adj2:"Crazy",
    adj3:"Fire"
}

let shop={
    shop1:"Engine",
    shop2:"Foods",
    shop3:"Garments"
}

let word={
    word1:"Bros",
    word2:"Limited",
    word3:"Hub"
}
let r = Math.floor(Math.random() * 3) + 1;

let n1= adj["adj" + r]
let n2= shop["shop"+ r]
let n3= word["word" + r]

console.log(n1+ " " + n2+ " " + n3)