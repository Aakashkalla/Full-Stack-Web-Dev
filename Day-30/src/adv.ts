interface User {
    name : string,
    age : number,
    id : string,
    email : string,
    password : string
}

type UpdatedProps = Pick<User,  'name' | 'age' |'email'>
type PartialProps = Partial<User>

function updateInfo(updatedInfo : UpdatedProps){
    //db calls
    console.log(` Updated Info ${updatedInfo.age} ${updatedInfo.name}`)
}
updateInfo({
    name : "Aakash",
    age : 21,
    email : "jdha@gmail.com"
})

function partialUpdate(props : PartialProps){
    console.log(`Contains this much info ${JSON.stringify(props)} `)
}
partialUpdate({
    name : "Aakash"
})
partialUpdate({
    name : "Aakash",
    age : 21,
    id : '123',
    password : '22728'
})

//Readonly 
const user : Readonly<User> = {
    name : "Aakash",
    age : 21,
    email : "jhda",
    id : "dj",
    password : "djsjkd"
}

//Record
type Users = Record<string,PartialProps>

const users : Users = {
    "hjd" : {
        name : "Aakash"
    } 
}

console.log("Users " + JSON.stringify(users))