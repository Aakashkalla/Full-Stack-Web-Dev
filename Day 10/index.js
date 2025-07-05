let arr = [1,2,3,4,5];
console.log(arr)
console.log(arr.length)
console.log(arr[0])
arr[0]= 1234
arr[5]= 789
console.log(arr)
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr.push("HEY"))
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift("Aakash")
console.log(arr)
delete arr[3]
console.log(arr)

let a1 = [1,2,3,4]
let a2 = [5,6,7,8]
let a3 = [9,10,11,12]
a1.concat(a2,a3)
console.log(a1)

let num = [1,2,3,4,5]
console.log(num.splice(1,3))
console.log(num)
console.log(num.splice(1,1,222,333,44))
console.log(num)  

let ab = [1,2,3,4,5]
for(let i = 0;i<ab.length;i++){
    console.log(ab[i])
}

ab.forEach((value,index,arr) => {
        console.log(value,index,arr)
});

let obj = {
    a:1,
    b:2,
    c:4
}

for (const key in obj) {
    if(Object.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(key,element);
    }
}

for (const element of ab) {
    console.log(element) 
}

let newArr = ab.map((e)=>{
    return e**2
})

console.log(newArr)

const greater = (e) =>{
    if(e>7){
        return true
    }
    return false
}
console.log(newArr.filter(greater))


let array = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}
console.log(array.reduce(red))

let A = Array.from("Aakash")
console.log(A)