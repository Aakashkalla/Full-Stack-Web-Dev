const fs = require("fs")
// console.log(fs)

console.log("starting");
// fs.writeFileSync("Aakash.txt", "Aakash is a good boi");
fs.writeFile("Aakash2.txt", "Aakash is a good boi",()=>{
    console.log("done")
    fs.readFile("Aakash.txt",(error,data)=>{
        console.log(error, data.toString());
    })
});

fs.appendFile("Aakash.txt", " aakash",(err,data)=>{
    console.log(data);
})
console.log("ending")