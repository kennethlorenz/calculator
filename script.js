var firstNumber = "";
var secondNumber;
var operator;
document.querySelector(".currentYear").textContent = new Date().getFullYear();
const input = document.querySelector(".input.main");
const acButton = document.querySelector(".ac");
var firstNumberDuplicate = "";
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
  //
  if (e.target.innerHTML == 0 && input.innerHTML.startsWith("0")) {
    return;
  } else if (e.target.innerHTML == "." && input.innerHTML.startsWith("0")) {
    firstNumber += 0 + ".";
    input.innerHTML = firstNumber;
  } else if (e.target.innerHTML == "." && input.innerHTML.indexOf(".") !== -1) {
    return;
  } else if (firstNumberDuplicate.length >= 20) {
    firstNumber += e.target.innerHTML;
    firstNumberDuplicate = firstNumber;
    input.innerHTML = convertToExponential(firstNumber);
  } else {
    firstNumber += e.target.innerHTML;
    firstNumberDuplicate = firstNumber;
    input.innerHTML = firstNumber;
  }
}

function convertToExponential(number) {
  return parseFloat(number).toExponential(2);
}

function allClear() {
  firstNumber = "";
  input.innerHTML = "0";
}
buttons.forEach((button) => button.addEventListener("click", displayInput));
acButton.addEventListener("click", allClear);
