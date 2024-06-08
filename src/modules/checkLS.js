import extractDate from './extractDate';
import dom from './dom';

export default function checkLS() {
    const {
        todoList,
        listCon,
        start,
    } = dom();

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
    }
};
