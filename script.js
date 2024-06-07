// const database = new Object()

const tempDB = {
    task: [],
    priority: []
}

const todoList = document.querySelector(".todo-list")
const listCon = document.querySelector(".list-container")

const checkDB = () => {
    let todayDate = extractDate()
    if (localStorage.getItem(todayDate) !== null) {

        let tempObj = JSON.parse(localStorage.getItem(todayDate));

        todoList.classList.remove('hide')
        let len = tempObj.priority.length
        for (let i = 0; i < len; i++) {
            let tempEl = document.createElement("div")
            tempEl.classList.add("todo-task")
            tempEl.innerHTML = `<div class="added-priority">${tempObj.priority[i]}</div><div class="added-name">${tempObj.task[i]}</div>`

            listCon.appendChild(tempEl)
        }
    }
    else {
        start.classList.remove('hide');
        console.log("HKJ");
    }

}

const extractDate = () => {
    const d = new Date()

    const currentDate = d.getDate()
    const currentMonth = d.getMonth() + 1
    const currentYear = d.getFullYear()

    return `${currentDate}-${currentMonth}-${currentYear}`
}

checkDB()

const start = document.querySelector(".start")
const addToList = document.querySelector(".add-to-list")

const addBtn = document.querySelector(".add-btn")

addBtn.addEventListener("click", () => {
    start.classList.add("hide")
    addToList.classList.remove("hide")

    tempDB.task = []
    tempDB.priority = []
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

    addToObject(text, priority)
    console.log(tempDB)

    inputText.value = ""
})

const add = (a, b) => {
    const element = document.createElement("div")
    element.classList.add("added-task")
    element.innerHTML = `<div class="added-priority">${b}</div><div class="added-name">${a}</div>`

    allTasks.appendChild(element)
}

const addToObject = (a, b) => {
    tempDB.task.push(a)
    tempDB.priority.push(b)
}

addToLocalStorage = () => {
    let todayDate = extractDate()
    console.log(todayDate)
    console.log(tempDB)

    localStorage.setItem(todayDate, JSON.stringify(tempDB));
    console.log(localStorage.getItem(todayDate))
}

const dontBtn = document.querySelector(".done-btn button")
const successful = document.querySelector(".successful")


dontBtn.addEventListener("click", () => {
    addToLocalStorage()

    addToList.classList.add("hide")
    successful.classList.remove("hide")
})

const viewBtn = document.querySelector(".view-btn")

viewBtn.addEventListener("click", () => {
    successful.classList.add('hide');

    checkDB()
})


