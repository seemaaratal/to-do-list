
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const listcontainer = document.querySelector('.list-container');

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please enter a task");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = input.value;

        const span = document.createElement("span");
        span.innerHTML = "x";

        li.appendChild(span);

        listcontainer.appendChild(li);

        saveData();
    }
    input.value = "";
});

listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem(
        "todoData", listcontainer.innerHTML
    );
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("todoData") || "";

}
showTask();