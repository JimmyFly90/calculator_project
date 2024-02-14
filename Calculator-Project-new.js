// get HTML for each button to show on black screen when clicked
// C will clear screen to show zero and be ready for next equation
// back button ← to remove last element on screen
// convert button output on screen to be numbers and arithmetic symbols
// equal to show answer to math equation

let screen = document.querySelector(".screen");

document.getElementById("calc-button-double").addEventListener("click", clear);

function clear() {
  screen.innerHTML = 0;
}

document.querySelector("calc-button-row").addEventListener("click", enterNumber);

function enterNumber(event) {
  screen.innerHTML += parseInt((event.target.innerHTML));
}

document.querySelector("symbol-button").addEventListener("click", enterSymbol);

function enterSymbol(event) {
  screen.innerHTML = (event.target.innerHTML);
}

document.getElementById("back-button").addEventListener("click", backButton);

function backButton() {
  screen.innerHTML = (screen.innerHTML.slice(0, -1));
}

document.getElementById("result").addEventListener("click", calculate);

function calculate() {
    return screen.innerHTMl
}