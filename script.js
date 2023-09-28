var firstNumber = 0;
var secondNumber;
var operator;
document.querySelector(".currentYear").textContent = new Date().getFullYear();
const input = document.querySelector(".input.main");
input.innerHTML = firstNumber;

var buttons = document.querySelectorAll(".number");

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
    return firstNumber, secondNumber;
  } else if (operator == "*") {
    return firstNumber, secondNumber;
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
}

console.log(operate(1, "+", 1));

function displayInput(e) {
  if (e.target.innerHTML !== "0") {
    firstNumber += e.target.innerHTML;
    input.innerHTML = firstNumber;
  }
  return;
}
buttons.forEach((button) => button.addEventListener("click", displayInput));
