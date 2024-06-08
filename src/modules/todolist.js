export default function todolist() {
    const container = document.querySelector(".inside-container")

    const todoListElement = document.createElement("div")
    todoListElement.classList.add("todo-list")
    todoListElement.classList.add("hide")
    todoListElement.innerHTML = `<div class="lline"><div class="lline1">your today's</div><div class="lline1"><u>schedule</u></div></div><div class="list-container"></div>`

    container.appendChild(todoListElement)
};
