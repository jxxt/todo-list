export default function todolist() {
    const container = document.querySelector(".inside-container")

    const todoListElement = document.createElement("div")
    todoListElement.classList.add("todo-list")
    todoListElement.classList.add("hide")
    todoListElement.innerHTML= ``

    container.appendChild(todoListElement)
};
