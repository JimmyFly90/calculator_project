// get buttons to show on black screen
// convert button output on screen to be numbers and symbols
// equal to show answer to math equation
// C will clear screen to show zero and be ready for next equation

let screen = document.querySelector(".screen");

document.getElementById("calc-button-double").addEventListener("click", clear);

function clear() {
  screen.innerHTML = 0;
}

document.getElementById("number-button").addEventListener("click", enterNumber);

function enterNumber(event) {
  screen.innerHTML += (event.target.innerHTML);
}

document.getElementById("symbol-button").addEventListener("click", enterSymbol);

function enterSymbol(event) {
  screen.innerHTML = (event.target.innerHTML);
}