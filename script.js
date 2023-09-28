var firstNumber = "";
var secondNumber;
var operator;
document.querySelector(".currentYear").textContent = new Date().getFullYear();
const input = document.querySelector(".input.main");
const acButton = document.querySelector(".ac");
var buttons = document.querySelectorAll(".btn");

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator == "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
}

function displayInput(e) {
  if (e.target.innerHTML == 0 && input.innerHTML.startsWith("0")) {
    console.log("0 clicked");
    return;
  } else if (e.target.innerHTML == "." && input.innerHTML.startsWith("0")) {
    firstNumber += 0 + ".";
    input.innerHTML = firstNumber;
  } else if (e.target.innerHTML == "." && input.innerHTML.indexOf(".") !== -1) {
    return;
  } else {
    firstNumber += e.target.innerHTML;
    input.innerHTML = firstNumber;
  }
  console.log(firstNumber);
}

function allClear() {
  firstNumber = "0";
  input.innerHTML = firstNumber;
}
buttons.forEach((button) => button.addEventListener("click", displayInput));
acButton.addEventListener("click", allClear);
