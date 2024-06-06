const start = document.querySelector(".start")
const addToList = document.querySelector(".add-to-list")

const addBtn = document.querySelector(".add-btn")

addBtn.addEventListener("click", () => {
    start.classList.add("hide")
    addToList.classList.remove("hide")
})

const inputText = document.querySelector(".input-text")
const inputPriority = document.querySelector(".priority-select")

const plusBtn = document.querySelector(".plus-btn")

const allTasks = document.querySelector(".all-tasks")

plusBtn.addEventListener("click", () => {
    // if (inputText.value == "") { console.log("khljj") }
    console.log(inputText.value)
    console.log(inputPriority.value)

    let text = inputText.value

    if (inputPriority.value == "low") { priority = "🟢" }
    else if (inputPriority.value == "medium") { priority = "🟡" }
    else if (inputPriority.value == "high") { priority = "🔴" }

    add(text, priority)
})

const add = (a, b) => {
    const element = document.createElement("div")
    element.classList.add("added-task")
    element.innerHTML = `<div class="added-task"><div class="added-priority">${b}</div><div class="added-name">${a}</div></div>`

    allTasks.appendChild(element)
}