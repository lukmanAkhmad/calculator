const screenDisplay = document.querySelector(".screen");
const lastScreen = document.querySelector(".last-screen");
const currentScreen = document.querySelector(".current-screen");
const buttonNumber = document.querySelectorAll(".button-number");
const buttonOperator = document.querySelectorAll("#button-operator");
const buttonEquals = document.querySelector(".button-equals");
const clearButton = document.querySelector(".button-clear");
const buttonBackSpace = document.querySelector(".button-backspace");

buttonEquals.addEventListener("click", evaluate);
clearButton.addEventListener("click", clearData);
buttonBackSpace.addEventListener("click", backSpace);

let firstNumber = "";
let currentOperator = null;
let secondNumber = "";

buttonNumber.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (currentOperator !== null) {
            secondNumber += elem.textContent;
            enterNumberToScreen(secondNumber);
            console.log(`Second Number = ${secondNumber}`);
        } else if (currentOperator === null) {
            firstNumber += elem.textContent;
            enterNumberToScreen(firstNumber);
            console.log(`First Number = ${firstNumber}`);
        };
    });
});

buttonOperator.forEach((elem) => {
    elem.addEventListener("click", () => {
        if(currentOperator !== null){
            evaluate();
        };
        setOperation(elem.textContent);
    });
});

function enterNumberToScreen(number) {
    currentScreen.textContent = number;
};

function setOperation(operator) {
    if (currentOperator !== null) {
        firstNumber = currentScreen.textContent;
        secondNumber = "";
    };
    currentOperator = operator;
    lastScreen.textContent = `${firstNumber} ${currentOperator}`;
};

function evaluate() {
    if (currentOperator === null) return;
    if (currentOperator === "/" && (firstNumber === "0" || secondNumber === "0")) {
        secondNumber = "";
        return currentScreen.textContent = "You cannot divide by zero !!!";
    };
    currentScreen.textContent = convertToDecimal(
        operate(currentOperator, firstNumber, secondNumber)
    );
    lastScreen.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
};

function clearData() {
    lastScreen.textContent = "";
    currentScreen.textContent = "";
    firstNumber = "";
    currentOperator = null;
    secondNumber = "";
};

function backSpace() {
    if (currentOperator === null) {
        let getNumber = currentScreen.textContent;
        let deleteNumber = getNumber.slice(0, -1);
        currentScreen.textContent = deleteNumber;
        firstNumber = currentScreen.textContent;
        console.log(firstNumber)
    } else if (currentOperator !== null) {
        let getNumber = currentScreen.textContent;
        let deleteNumber = getNumber.slice(0, -1);
        currentScreen.textContent = deleteNumber;
        secondNumber = currentScreen.textContent;
        console.log(secondNumber)
    }
};

function convertToDecimal(number) {
    return Math.round(number * 1000) / 1000;
};

function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

function operate(operator, firstNumber, secondNumber) {
    let firstNumbers = Number(firstNumber);
    let secondNumbers = Number(secondNumber);
    switch (operator) {
        case "+":
            return add(firstNumbers, secondNumbers);

        case "-":
            return subtract(firstNumbers, secondNumbers);

        case "X":
            return multiply(firstNumbers, secondNumbers);

        case "/":
            return divide(firstNumbers, secondNumbers);

    };
};
