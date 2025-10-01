function addToDo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value.trim();
    if (!value) return;

    const count = document.querySelectorAll("#topDiv h4").length + 1;

    const newToDo = document.createElement("h4");
    newToDo.textContent = `${count}. ${value} `;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = function () {
        deleteToDo(delBtn);
    };

    newToDo.appendChild(delBtn);
    document.querySelector("#topDiv").appendChild(newToDo);

    inputEl.value = "";
}

function deleteToDo(buttonEl) {
    buttonEl.parentElement.remove();
}
