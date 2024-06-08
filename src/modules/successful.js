export default function successful() {
    const container = document.querySelector(".inside-container")

    const successfulElement = document.createElement("div")
    successfulElement.classList.add("successful")
    successfulElement.classList.add("hide")
    successfulElement.innerHTML = `<div class="a"> your day is planned </div><div class="b">successfully!!</div><div class="view-btn"><button>view your day</button></div>`

    container.appendChild(successfulElement)
};
