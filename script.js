var firstNumber = "";
var secondNumber = "";
var operator = "";
var firstNumberDuplicate = "";
var result = "";
document.querySelector(".currentYear").textContent = new Date().getFullYear();
const mainScreen = document.querySelector(".input.main");
const allClearButton = document.querySelector(".ac");
const clearButton = document.querySelector(".c");
const equalButton = document.querySelector(".equal");
var buttons = document.querySelectorAll(".btn");
var operators = document.querySelectorAll(".operator");
var secondScreen = document.querySelector(".input.result");
var secondScreenDisplay = "";
var mainScreenDisplay = "";
mainScreen.textContent = 0;

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

function displayInput(e) {
  // Checks if the user has entered 0 after 0 and a decimal (.)
  //Allows the user to enter zero after a decimal point
  // 0.000000
  if (
    e.target.textContent == 0 &&
    mainScreen.textContent.startsWith("0") &&
    mainScreen.textContent.includes(".")
  ) {
    mainScreenDisplay += e.target.textContent;
    mainScreen.textContent = mainScreenDisplay;
    console.log("first if");
  }
  //allows user to enter only one 0 if the initial value is 0
  else if (
    e.target.textContent == 0 &&
    mainScreen.textContent.startsWith("0")
  ) {
    console.log("second if");
    return;
  }
  //checks if the user clicks on decimal (.) and the initial value is 0
  else if (
    e.target.textContent == "." &&
    mainScreen.textContent.startsWith("0")
  ) {
    //if input doesn't have a decimal and a user clicks on decimal
    //add 0 as a first value followed with a decimal.
    if (!mainScreen.textContent.includes(".")) {
      mainScreenDisplay = 0 + ".";
      console.log("3rd if");
      mainScreen.textContent = mainScreenDisplay;
      console.log(mainScreenDisplay);
    }
  }
  //checks if the user clicks on decimal (.) and if there's already a decimal on the input
  //if there is we return as default
  else if (
    e.target.textContent == "." &&
    mainScreen.textContent.indexOf(".") !== -1
  ) {
    return;
  }
  //convert a number to exponential if the input is greater than or equal to 20
  else if (firstNumberDuplicate.length >= 20) {
    mainScreenDisplay += e.target.textContent;
    firstNumberDuplicate = mainScreenDisplay;
    mainScreen.textContent = convertToExponential(mainScreenDisplay);
  } else {
    //check if the user clicks on decimal (.) and the input is empty
    //add 0 as initial value followed by a decimal
    if (e.target.textContent == "." && mainScreenDisplay == "") {
      mainScreenDisplay += 0 + ".";
      firstNumberDuplicate = mainScreenDisplay;
      mainScreen.textContent = mainScreenDisplay;
    }
    //checks if the user selects 0 and the initial value is empty
    //set the initial value of the content to 0
    else if (e.target.textContent == "0" && mainScreenDisplay == "") {
      mainScreen.textContent = 0;
      console.log("test");
      return;
    }
    //add the numbers into the input
    else {
      mainScreenDisplay += e.target.textContent;
      firstNumberDuplicate = mainScreenDisplay;
      mainScreen.textContent = mainScreenDisplay;
    }
  }
  console.log(mainScreen.textContent);
}

function convertToExponential(number) {
  return parseFloat(number).toExponential(2);
}

function allClear() {
  firstNumber = "";
  firstNumberDuplicate = "";
  secondNumber = "";
  mainScreen.textContent = 0;
  secondScreen.textContent = "";
  mainScreenDisplay = "";
}

function clear() {
  mainScreenDisplay = mainScreen.textContent.slice(0, -1);
  console.log(firstNumber);
  mainScreen.textContent = mainScreenDisplay;
  if (mainScreen.textContent === "") {
    mainScreen.textContent = 0;
  }
}

function updateDisplay(firstNumber, operator, secondNumber) {
  secondScreenDisplay = `${firstNumber} ${operator} ${secondNumber} =`;
  secondScreen.textContent = secondScreenDisplay;
}

function updateSecondScreen(e) {
  calculate();
  firstNumber = mainScreen.textContent;
  operator = e.target.textContent;
  secondScreenDisplay = `${firstNumber} ${operator}`;
  secondScreen.textContent = secondScreenDisplay;
  mainScreenDisplay = "";
}

function calculate() {
  secondNumber = mainScreen.textContent;
  if (secondNumber == "" && firstNumber == "") {
    return;
  }
  if (!firstNumber == "" && !secondNumber == "") {
    console.log(mainScreen.textContent);
    updateDisplay(firstNumber, operator, secondNumber);
    result = operate(firstNumber, operator, secondNumber);
    mainScreen.textContent = result;
    secondNumber = "";
    mainScreenDisplay = "";
    firstNumber = "";
  }
  console.log(mainScreen.textContent);
}

buttons.forEach((button) => button.addEventListener("click", displayInput));
allClearButton.addEventListener("click", allClear);
operators.forEach((operator) =>
  operator.addEventListener("click", updateSecondScreen)
);

clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", calculate);
