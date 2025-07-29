const promiseOne = new Promise((resolve, reject) => {
    // Async Tasks
    // DB Calls, cyrptography, network 
    setTimeout(() => {
        console.log("Async Task is complete");
        resolve();
    }, 400)
})

promiseOne.then(() => {
    console.log("Promise One is resolved");
})

// Another way to write above code 

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 is complete");
        resolve()
    }, 400)
}).then(() => {
    console.log("Promise Two is resolved");
})

//Access data from promise

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Data Fetched");
        resolve({ username: 'Aakash', email: "aakash@gmail.com" })
    }, 400)
})

promiseThree.then(function (user) {
    console.log(user);
})

//Error handling in Promise using catch
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'Aakash', password: '1234' })
        } else {
            reject("ERROR! Data couldn't be fetched")
        }
    }, 400);
})

promiseFour.then(function (user) {
    console.log(user);
    return user.password;
}).then(function (userpassword) {
    console.log(userpassword)
}).catch(function (error) {
    console.log(error)
}).finally(function () {
    console.log("Promise has either been resolved or rejected")
})

//Handling Error and Fetching Data using Async and Await :

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'JS', password: '1234' })
        } else {
            reject("ERROR! JS couldn't be fetched")
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    } 
}
consumePromiseFive();

async function getData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        // console.log(data);
        const data_id = data.filter((obj)=>obj.id>5);
        console.log(data_id);

    } catch (error) {
        console.log(error);
    }
}
getData();