console.log("Wowzers");
console.log("Aakash");
// setInterval(() => {
    
//     console.log("HEY LOL");
// },0);
console.log("The end ");
// setInterval(() => {
//     console.log("HEY AGAIN");
// },0);

const fn = ()=>{
    console.log("Nothing");
}
const callback = (arg,fn)=>{
    console.log(arg);
    fn();
}

const loadScript = (callback)=>{
    callback();
}

