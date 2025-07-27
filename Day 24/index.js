const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i); 
}

const str = "Aakash Kalla";

// for (const word of str) {
//     console.log(word);
// }

for (const word of str) {
    if(word===" "){
        break;
    }
    console.log(word);
}

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key);
    console.log(value);
}

const myobject ={
    js : 'javascript',
    java : 'java',
    cpp : 'c++'
}

for (const key in myobject) {
    // console.log(key);
    console.log(key + " " + myobject[key]);
    // console.log(myobject[key]);
}


const arr1 = ["A","b","c","d"];
for (const key in arr1) {
    console.log(key)
    console.log(arr1[key]);
}

arr1.forEach(function (i){
    console.log(i);
})

console.log(" ")
arr1.forEach((i)=>{ 
    console.log(i);
})
console.log(" ")
function print(i){
    console.log(i);
}

arr1.forEach(print);

const myarr = [
    {
        lang : 'java',
        file : 'java'
    },
    {
        lang : 'javascript',
        file : 'js'
    },
    {
        lang : 'python',
        file : 'py'
    }
];

myarr.forEach((item)=>{
    console.log(item.file);
    console.log(item.lang);
})