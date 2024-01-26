const screen = document.querySelector(".screen");

document
  .querySelector(".calc-buttons")
  .addEventListener("click", function(event){
  screen.innerHTML = (event.target.innerHTML);
  });
