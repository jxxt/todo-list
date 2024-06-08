import checkLS from './checkLS';
import extractDate from './extractDate';
import dom from './dom';

export default function addEvent() {
    const {
        start,
        addToList,
        addBtn,
        warning,
        inputText,
        inputPriority,
        plusBtn,
        allTasks,
        dontBtn,
        successful,
        viewBtn,
    } = dom()

    const tempDB = {
        task: [],
        priority: []
    }

    addBtn.addEventListener("click", () => {
        start.classList.add("hide")
        addToList.classList.remove("hide")

        tempDB.task = []
        tempDB.priority = []
    })

    inputText.addEventListener("focus", () => {
        warning.classList.add('hide');
    })

    plusBtn.addEventListener("click", () => {
        if (inputText.value == "") {
            warning.classList.remove('hide');
        }

        else {
            // console.log(inputText.value)
            // console.log(inputPriority.value)

            warning.classList.add('hide');

            let text = inputText.value

            if (inputPriority.value == "low") { priority = "🟢" }
            else if (inputPriority.value == "medium") { priority = "🟡" }
            else if (inputPriority.value == "high") { priority = "🔴" }

            add(text, priority)

            addToObject(text, priority)
            // console.log(tempDB)

            inputText.value = ""
        }
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
        // console.log(todayDate)
        // console.log(tempDB)

        localStorage.setItem(todayDate, JSON.stringify(tempDB));
        // console.log(localStorage.getItem(todayDate))
    }

    dontBtn.addEventListener("click", () => {
        addToLocalStorage()

        addToList.classList.add("hide")
        successful.classList.remove("hide")
    })

    viewBtn.addEventListener("click", () => {
        successful.classList.add('hide');

        checkLS()
    })
};
