console.log("This is promises");

let proms1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting u");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Aakash")
        }, 3000);
    }

})
let proms2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting u 2");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Aakash 2")
        }, 3000);
    }

})
let p3 = Promise.all([proms1,proms2]);
p3.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err);
})