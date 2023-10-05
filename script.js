var firstNumber = "";
var secondNumber = "";
var operator = "";
var firstNumberDuplicate = "";
var result = "";
document.querySelector(".currentYear").textContent = new Date().getFullYear();
const input = document.querySelector(".input.main");
const allClearButton = document.querySelector(".ac");
const clearButton = document.querySelector(".c");
const equalButton = document.querySelector(".equal");
var buttons = document.querySelectorAll(".btn");
var operators = document.querySelectorAll(".operator");
var resultScreen = document.querySelector(".input.result");
var resultScreenDisplay = "";

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
  var firstNum = parseInt(firstNumber);
  var secondNum = parseInt(secondNumber);
  if (operator == "+") {
    return add(firstNum, secondNum);
  } else if (operator == "-") {
    return subtract(firstNum, secondNum);
  } else if (operator == "*") {
    return multiply(firstNum, secondNum);
  } else if (operator == "/") {
    return divide(firstNum, secondNum);
  }
}

function updateDisplay(firstNumber, operator, secondNumber) {
  resultScreenDisplay = `${firstNumber} ${operator} ${secondNumber} =`;
  resultScreen.textContent = resultScreenDisplay;
}

function displayInput(e) {
  //
  if (e.target.textContent == 0 && input.textContent.startsWith("0")) {
    return;
  } else if (e.target.textContent == "." && input.textContent.startsWith("0")) {
    firstNumber += 0 + ".";
    input.textContent = firstNumber;
  } else if (
    e.target.textContent == "." &&
    input.textContent.indexOf(".") !== -1
  ) {
    return;
  } else if (firstNumberDuplicate.length >= 20) {
    firstNumber += e.target.textContent;
    firstNumberDuplicate = firstNumber;
    input.textContent = convertToExponential(firstNumber);
  } else if (
    resultScreen.textContent.length >= 1 ||
    resultScreen.textContent === "0"
  ) {
    secondNumber += e.target.textContent;
    input.textContent = secondNumber;
  } else {
    firstNumber += e.target.textContent;
    firstNumberDuplicate = firstNumber;
    input.textContent = firstNumber;
  }
}

function convertToExponential(number) {
  return parseFloat(number).toExponential(2);
}

function allClear() {
  firstNumber = "";
  firstNumberDuplicate = "";
  secondNumber = "";
  input.textContent = "0";
  resultScreen.textContent = "";
}

function clear() {
  firstNumber = input.textContent.slice(0, -1);
  console.log(firstNumber);
  input.textContent = firstNumber;
  if (input.textContent === "") {
    input.textContent = 0;
  }
}

function operatorClicked(e) {
  operator = e.target.textContent;
  if (input.textContent === "0") {
    resultScreenDisplay = `${0} ${e.target.textContent}`;
  } else {
    resultScreenDisplay = `${firstNumber} ${operator}`;
  }
  resultScreen.textContent = resultScreenDisplay;
}

function calculate() {
  updateDisplay(firstNumber, operator, secondNumber);
  result = operate(firstNumber, operator, secondNumber);
  input.textContent = result;
  secondNumber = "";
  firstNumber = result;
}

buttons.forEach((button) => button.addEventListener("click", displayInput));
allClearButton.addEventListener("click", allClear);
operators.forEach((operator) =>
  operator.addEventListener("click", operatorClicked)
);

clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", calculate);
