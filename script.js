var firstNumber = "";
var secondNumber;
var operator = "";
var firstNumberDuplicate = "";
document.querySelector(".currentYear").textContent = new Date().getFullYear();
const input = document.querySelector(".input.main");
const allClearButton = document.querySelector(".ac");
const clearButton = document.querySelector(".c");
var buttons = document.querySelectorAll(".btn");
var operators = document.querySelectorAll(".operator");
var resultScreen = document.querySelector(".input.result");
var inputDisplay = "";

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
  firstNumberDuplicate = "";
  input.innerHTML = "0";
}

function clear() {
  firstNumber = input.innerHTML.slice(0, -1);
  console.log(firstNumber);
  input.innerHTML = firstNumber;
  if (input.innerHTML === "") {
    allClear();
  }
}

function operatorClicked(e) {
  console.log(e.target.innerHTML);
  inputDisplay = `${firstNumber} ${e.target.innerHTML}`;
  resultScreen.textContent = inputDisplay;
}
buttons.forEach((button) => button.addEventListener("click", displayInput));
allClearButton.addEventListener("click", allClear);
operators.forEach((operator) =>
  operator.addEventListener("click", operatorClicked)
);

clearButton.addEventListener("click", clear);
