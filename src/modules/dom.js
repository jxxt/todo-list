export default function dom() {
    return {
        todoList: document.querySelector(".todo-list"),
        listCon: document.querySelector(".list-container"),
        start: document.querySelector(".start"),
        addToList: document.querySelector(".add-to-list"),
        addBtn: document.querySelector(".add-btn"),
        warning: document.querySelector(".warning"),
        inputText: document.querySelector(".input-text"),
        inputPriority: document.querySelector(".priority-select"),
        plusBtn: document.querySelector(".plus-btn"),
        allTasks: document.querySelector(".all-tasks"),
        dontBtn: document.querySelector(".done-btn button"),
        successful: document.querySelector(".successful"),
        viewBtn: document.querySelector(".view-btn"),
    };
}