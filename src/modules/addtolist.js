export default function addtolist() {
    const container = document.querySelector(".inside-container")

    const addToListElement = document.createElement("div")
    addToListElement.classList.add("add-to-list")
    addToListElement.classList.add("hide")
    addToListElement.innerHTML = `<div class="ins">add your tasks:</div><div class="add-tasks"><div class="all-tasks"></div><div class="blank"><div class="text"><input class="input-text" type="text" name="task-name" placeholder="type here..."></div><div class="priority"><select class="priority-select" name="priority-select"><option value="low">🟢</option><option value="medium">🟡</option><option value="high">🔴</option></select></div></div><div class="warning">task can't be empty!</div><div class="plus-btn"><img src="./plus.svg" alt=""></div>`

    container.appendChild(addToListElement)
};
