async function sendRequest(){
    const response = await axios.post("http://localhost:3000/sum",{
        a : document.getElementById("a").value,
        b : document.getElementById("b").value
    })
    const ansEl = document.getElementById("answer");
    ansEl.textContent = response.data.answer;
    document.querySelector("body").append(ansEl);
}