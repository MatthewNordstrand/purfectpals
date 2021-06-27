document.querySelector("#optionsAll").addEventListener("click", showAll);
document.querySelector("#optionsCats").addEventListener("click", showCats);
document.querySelector("#optionsDogs").addEventListener("click", showDogs);

var catElements = document.querySelectorAll(".cat");
var dogElements = document.querySelectorAll(".dog");

function showAll() {
    catElements.forEach(element => {
        element.classList.remove("d-none");
    });
    dogElements.forEach(element => {
        element.classList.remove("d-none");
    });
}

function showCats() {
    catElements.forEach(element => {
        element.classList.remove("d-none");
    });
    dogElements.forEach(element => {
        element.classList.add("d-none");
    });
}

function showDogs() {
    catElements.forEach(element => {
        element.classList.add("d-none");
    });
    dogElements.forEach(element => {
        element.classList.remove("d-none");
    });
}