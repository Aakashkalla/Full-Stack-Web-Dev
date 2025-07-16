// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);
}
async function main(){
console.log("Loading modules")

console.log("Do something else")
console.log("Load Data")
let data = await getData();

console.log("After promise");
console.log(data);
console.log("process data")
}

main();
// data.then((v)=>{
// console.log("After promise");
// console.log(data);
// console.log("process data")
// })
