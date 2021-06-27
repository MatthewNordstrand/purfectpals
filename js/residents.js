
document.querySelector("#optionsAll").addEventListener("click", function() { setFilters(true, true) });
document.querySelector("#optionsCats").addEventListener("click", function() { setFilters(true, false) });
document.querySelector("#optionsDogs").addEventListener("click", function() { setFilters(false, true) });

var catElements = document.querySelectorAll(".cat");
var dogElements = document.querySelectorAll(".dog");

function setFilters(showCats, showDogs) {

    catElements.forEach(element => {
        if (showCats) {
            element.classList.remove("d-none");
        } else {
            element.classList.add("d-none");
        }
    });

    dogElements.forEach(element => {
        if (showDogs) {
            element.classList.remove("d-none");
        } else {
            element.classList.add("d-none");
        }
    });

}