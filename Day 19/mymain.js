import fs from "fs/promises"

let b = await fs.writeFile("Aakash.txt","HEY LOL")
let a = await fs.readFile("Aakash.txt")
console.log(a.toString());
let ab = await fs.readFile("Aakash2.txt")
let ac = await fs.writeFile("Aakash.txt"," Aakash")
let ad = await fs.readFile("Aakash.txt")
// console.log(a.toString());
console.log(ab.toString());
console.log(ad.toString());
// console.log(ac.toString());