export default function start() {
    const container = document.querySelector(".inside-container")

    const startElement = document.createElement("div")
    startElement.classList.add("start")
    startElement.classList.add("hide")
    startElement.innerHTML = `<div class="daily">daily</div><div class="todo">TODO list</div><div class="line1">plan your day already!</div><div class="line2">add today's schedule right now!</div><div class="add-btn"><button>begin</button></div>`

    container.appendChild(startElement)
};
