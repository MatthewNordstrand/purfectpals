
document.querySelector("#optionsAll").addEventListener("click", function() { setFilters(true, true) });
document.querySelector("#optionsCats").addEventListener("click", function() { setFilters(true, false) });
document.querySelector("#optionsDogs").addEventListener("click", function() { setFilters(false, true) });

var catElements = document.querySelectorAll(".cat");
var dogElements = document.querySelectorAll(".dog");

function setFilters(showCats, showDogs) {

    for (var i = 0; i < catElements.length ; i++) {
        if (showCats) {
            catElements[i].classList.remove("d-none");
        } else {
            catElements[i].classList.add("d-none");
        }
    }

    for (var i = 0; i < dogElements.length ; i++) {
        if (showDogs) {
            dogElements[i].classList.remove("d-none");
        } else {
            dogElements[i].classList.add("d-none");
        }
    }

}