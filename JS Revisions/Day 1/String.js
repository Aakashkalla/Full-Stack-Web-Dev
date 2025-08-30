const name = "Aakash"
const repo = 10

console.log(`Hey! My name is ${name} and my repo count is: ${repo}`)

const name1 = new String('AAKASH')

console.log(name1.length)
console.log(name1.toLowerCase())
console.log(name1.charAt(4))
console.log(name1.indexOf('H'))

const newName = name1.substring(0,4)
console.log(newName)

const newName1 = name1.slice(-6,10);
console.log(newName1)

const name2 = "    aakash   " 
console.log(name2.trim())
console.log(name2)

console.log(name1.replace("A", "a"))
console.log(name1.includes("A"))
console.log(name1.split(""))