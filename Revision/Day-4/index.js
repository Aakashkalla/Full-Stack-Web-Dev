let todos = [];
function addToDo(){
    if(document.querySelector("input").value==="") return;
    todos.push({
        title : document.querySelector("input").value,
    })
    render();
    document.querySelector("input").value = "";
}   

function deleteTodo(index){
    todos.splice(index,1)
    render();
}

function createToDoComponent(todo,index){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.setAttribute("onclick", "deleteTodo(" + index + ")");
    h1.innerHTML = todo.title;
    div.appendChild(h1);
    div.appendChild(button);
    return div;
}

function render(){
    document.querySelector("#todos").innerHTML = "";
    for(let i = 0; i<todos.length;i++){
        const div = createToDoComponent(todos[i], i);
        document.querySelector("#todos").appendChild(div)
    }
}
