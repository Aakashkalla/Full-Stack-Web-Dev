async function signup(){
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    await axios.post("http://localhost:3000/signup",{
        username : username,
        password : password
    });
    alert("You have completed Sign-Up");
}

async function signin(){
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;
    const response = await axios.post("http://localhost:3000/signin",{
        username : username,
        password : password
    })
    localStorage.setItem("token", response.data.token);
    alert("You have Signed In");
}

async function getUserInfo(){
    const response = await axios.get("http://localhost:3000/me",{
        headers:{
            token : localStorage.getItem("token")
        }
    });
    document.getElementById("information").innerHTML = `Username : ${response.data.username}, Password : ${response.data.password}`
}

function logout(){
    localStorage.removeItem("token");
}