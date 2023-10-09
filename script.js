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
var inputDisplay = "";
input.textContent = 0;

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
  } else if (operator == "x") {
    return multiply(firstNum, secondNum);
  } else if (operator == "÷") {
    console.log(divide(firstNum, secondNum));
    return divide(firstNum, secondNum);
  }
}

function updateDisplay(firstNumber, operator, secondNumber) {
  resultScreenDisplay = `${firstNumber} ${operator} ${secondNumber} =`;
  resultScreen.textContent = resultScreenDisplay;
}

function displayInput(e) {
  // Checks if the user has entered 0 after 0.
  //Allows the user to enter zero after a decimal point
  // 0.000000
  if (
    e.target.textContent == 0 &&
    input.textContent.startsWith("0") &&
    input.textContent.includes(".")
  ) {
    inputDisplay += e.target.textContent;
    input.textContent = inputDisplay;
    console.log("first if");
  }
  //allows user to enter only one 0 if the initial value is 0
  else if (e.target.textContent == 0 && input.textContent.startsWith("0")) {
    console.log("second if");
    return;
  }
  //
  else if (e.target.textContent == "." && input.textContent.startsWith("0")) {
    if (!input.textContent.includes(".")) {
      inputDisplay = 0 + ".";
      console.log("3rd if");
      input.textContent = inputDisplay;
      console.log(inputDisplay);
    }
  } else if (
    e.target.textContent == "." &&
    input.textContent.indexOf(".") !== -1
  ) {
    return;
  } else if (firstNumberDuplicate.length >= 20) {
    inputDisplay += e.target.textContent;
    firstNumberDuplicate = inputDisplay;
    input.textContent = convertToExponential(inputDisplay);
    // } else if (
    //   resultScreen.textContent.length >= 1 ||
    //   resultScreen.textContent === "0"
    // ) {
    //   secondNumber += e.target.textContent;
    //   input.textContent = secondNumber;
  } else {
    if (e.target.textContent == "." && inputDisplay == "") {
      inputDisplay += 0 + ".";
      firstNumberDuplicate = inputDisplay;
      input.textContent = inputDisplay;
    } else if (e.target.textContent == "0" && inputDisplay == "") {
      input.textContent = 0;
      console.log("test");
      return;
    } else {
      inputDisplay += e.target.textContent;
      firstNumberDuplicate = inputDisplay;
      input.textContent = inputDisplay;
    }
  }
  console.log(input.textContent);
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
  inputDisplay = "";
}

function clear() {
  inputDisplay = input.textContent.slice(0, -1);
  console.log(firstNumber);
  input.textContent = inputDisplay;
  if (input.textContent === "") {
    input.textContent = 0;
  }
}

function operatorClicked(e) {
  inputDisplay = input.textContent;
  firstNumber = inputDisplay;
  operator = e.target.textContent;
  if (input.textContent === "0") {
    resultScreenDisplay = `${0} ${e.target.textContent}`;
  } else {
    resultScreenDisplay = `${firstNumber} ${operator}`;
  }
  resultScreen.textContent = resultScreenDisplay;
  inputDisplay = "";
}

function calculate() {
  secondNumber = input.textContent;
  if (secondNumber == "" && firstNumber == "") {
    return;
  }
  if (!firstNumber == "" && !secondNumber == "") {
    console.log(input.textContent);
    secondNumber = input.textContent;
    updateDisplay(firstNumber, operator, secondNumber);
    result = operate(firstNumber, operator, secondNumber);
    inputDisplay = result;
    input.textContent = inputDisplay;
    secondNumber = "";
    inputDisplay = "";
  }
  console.log(input.textContent);
}

buttons.forEach((button) => button.addEventListener("click", displayInput));
allClearButton.addEventListener("click", allClear);
operators.forEach((operator) =>
  operator.addEventListener("click", operatorClicked)
);

clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", calculate);
