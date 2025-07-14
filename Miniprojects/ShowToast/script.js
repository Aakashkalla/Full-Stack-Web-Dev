let button = document.getElementById("btn");

button.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = "This is a toast notification";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
});
