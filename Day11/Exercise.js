// Return a factorial

let a = [1,2,3,4,5,6] 
const fact = (a,b)=>{
    return a*b
}
console.log(a.reduce(fact))

let b = [1,2,3,4,5,6]
let r = 1
for(let e = 1; e<=b.length;e++){
    r = r*e;
}
console.log(r)

let c = 6
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let d = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })

    console.log(d)
}
factorial(c)