interface User1 {
    name : string,
    age : number
}

interface Admin  {
    name : string
    permissions : string
}

type UserOrAdmin = User1 | Admin

function greet(user : UserOrAdmin){
    console.log(user.name)
}

greet({
    name: "Aakash", 
    age : 21
})

greet({
    name : "Admin",
    permissions : "Manager"
})

let a : number[] = [1,2,3,4,5,6,7];
let max : number = 0;
for(let i:number = 0; i < a.length ; i++){
    if( max < a[i]!) max = a[i]!
}
console.log(max);

interface User{
    firstName : string,
    lastName : string,
    age:number
}

function filterAge(users : User[]) : User[]{
    return users.filter(user => user.age > 18)
}

const users : User[] = [{
    firstName : "Aakash",
    lastName : "Kalla",
    age : 21
}, {
    firstName : "ABC",
    lastName : "DEF",
    age : 14
}]

const filterData = filterAge(users)
console.log(filterData)