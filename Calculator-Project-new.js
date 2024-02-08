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

function convert() {
let numb = document.getElementById("number-button").value;
  for (let i = 1; i < x; i++) 
    screen.innerHTML = ` ${(i)}, `;
}
switch(operator) {
  case '1':
    result = 1;
    break;
  case '2':
    result = 2;
    break;
  case '3':
    result = 3;
    break;
  case '4':
    result = 4;
    break;
  case '5':
    result = 5;
    break;
  case '6':
    result = 6;
    break;
  case '7':
    result = 7;
    break;
  case '8':
    result = 8;
    break;
  case '9':
    result = 9;
    break;
  default:
    result = "Invalid operator";
}
