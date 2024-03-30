// get HTML for each button to show on black screen when clicked
// C will clear screen to show zero and be ready for next equation
// back button ← to remove last element on screen
// convert button output on screen to be numbers and arithmetic symbols
// equal to show answer to math equation

let screen = document.querySelector(".screen");

function clear() {
  screen.innerHTML = '0';
}

function calculate() {
  return screen.innerHTML;
}

function backButton() {
  screen.innerHTML += screen.innerHTML.slice(0, -1);
}

function enterSymbol(event) {
  screen.innerHTML = (event.target.innerHTML);
}

function enterNumber(event) {
  const value = parseInt((event.target.innerHTML), 10);

  /* your code originally was this

   screen.innerHTML +=  parseInt((event.target.innerHTML), 10);

   plus and equals will take the current value and add the new value to it

   So what you want to do is check if the current value is 0, if it is then you want to replace it with the new value

   If it is not 0 then you want to add the new value to the current value
  */

  if (screen.innerHTML === '0') {
    // I converted this to a string because the if statement is checking for a string
    screen.innerHTML = value.toString();
  } else {
    screen.innerHTML += value;
  }

}

document.getElementById("calc-button-double").addEventListener("click", clear, false);
document.querySelector(".calc-button-row").addEventListener("click", enterNumber, false);
document.querySelector("#symbol-button").addEventListener("click", enterSymbol, false);
document.getElementById("back-button").addEventListener("click", backButton, false);
document.getElementById("result").addEventListener("click", calculate, false);