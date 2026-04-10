let btn = document.querySelector("button")
let block = document.querySelector("#block")

function visibility() {
    block.classList.toggle("window")
}

btn.addEventListener("click", visibility)