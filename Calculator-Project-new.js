// get HTML for each button to show on black screen when clicked
// C will clear screen to show zero and be ready for next equation
// back button ← to remove last element on screen
// convert button output on screen to be numbers and arithmetic symbols
// remove zero from screen so it doens't preceed numbers
// equal to show answer to math equation

const screen = document.querySelector(".screen")

function clear() {
  screen.innerHTML = '0';
}

function enterValue(event) {
  const value = (event.target.innerHTML);
  if (screen.innerHTML == '0') {
    // I converted this to a string because the if statement is checking for a string
    screen.innerHTML = value.toString();
    } else {
    screen.innerHTML += value;
    } 
}

function backButton() {
  screen.innerHTML = (screen.innerHTML.slice(0, -1));
}

function calculate() {
  screen.innerHTML = eval(screen.innerHTML);
}
// eval is converting strings to numbers

document.getElementById("calc-button-double").addEventListener("click", clear);
document.getElementById("calc-buttons");