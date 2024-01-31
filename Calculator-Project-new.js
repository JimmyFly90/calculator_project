// get buttons to show on black screen
// convert button output on screen to be numbers and symbols
// equal to show answer to math equation
// C will clear screen to show zero and be ready for next equation



function addNumber() {
  let screen = document.getElementById(".screen").value; 
    for (let i = 1; i < screen; i++) {
      document.getElementById("answer").innerHTML += ` ${clickButton(i)}, `;
    }
}

function clickButton(number) {
}

function init () {
  document.addEventListener("click", function(value){
  screen.innerText = value.target.innerText;
  })
}
;

init ();