const screenDisplay = document.querySelector(".screen");
const lastScreen = document.querySelector(".last-screen");
const currentScreen = document.querySelector(".current-screen");
const buttonNumber = document.querySelectorAll(".button-number");
const buttonOperator = document.querySelectorAll(".button-operator");
const buttonEquals = document.querySelector(".button-equals");
const clearButton = document.querySelector(".button-clear");
const buttonBackSpace = document.querySelector(".button-backspace");
const buttonDot = document.querySelector(".button-dot-notation");

buttonEquals.addEventListener("click", evaluate);
clearButton.addEventListener("click", clearData);
buttonBackSpace.addEventListener("click", backSpace);
buttonDot.addEventListener("click", inputDot);
buttonNumber.forEach((elem) => {
    elem.addEventListener("click", buttonNumberOnClick)
});
buttonOperator.forEach((elem) => {
    elem.addEventListener("click", buttonOperatorOnClick)
});
window.addEventListener("keyup", inputFromKeyboard);

let firstNumber = "";
let currentOperator = null;
let secondNumber = "";

function buttonNumberOnClick() {
    if (currentOperator !== null) {
        // secondNumber += this.textContent;
        let valueFromButton = "";
        valueFromButton += this.textContent;
        enterNumberToScreen(valueFromButton);
        console.log(`Second Number = ${secondNumber}`);
    } else if (currentOperator === null) {
        // firstNumber += this.textContent;
        let valueFromButton = "";
        valueFromButton += this.textContent;
        enterNumberToScreen(valueFromButton);
        console.log(`First Number = ${firstNumber}`);
        console.log(`valueFromButton = ${valueFromButton}`);
    };
};

function buttonOperatorOnClick() {
    currentScreen.textContent = "";
    setOperation(this.textContent);

};

function enterNumberToScreen(number) {
    currentScreen.textContent += number;
    if (currentOperator !== null) {
        secondNumber += number;
    } else if (currentOperator === null) {
        firstNumber += number;
    };
};

function setOperation(operator) {
    if (currentOperator !== null && secondNumber === "") {
        currentOperator = operator;
        return lastScreen.textContent = `${firstNumber} ${currentOperator}`;
    };
    if (currentOperator !== null) {
        evaluate();
        firstNumber = currentScreen.textContent;
        currentScreen.textContent = "";
        secondNumber = "";
    };
    currentScreen.textContent = "";
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
    lastScreen.textContent = `${firstNumber} ${currentOperator} ${secondNumber} = `;
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
    };
};

function inputFromKeyboard(events) {
    console.log(events);
    if (events.key >= 0 && events.key <= 9) enterNumberToScreen(events.key);
    if (events.key === "Backspace") backSpace();
    if ((events.key === "=") || (events.key === "Enter")) evaluate();
    if (events.key === "*"
        || events.key === "/"
        || events.key === "+"
        || events.key === "-") {
        setOperation(convertOperator(events.key))
    };
    if (events.key === "Escape") clearData();
    if (events.key === ".") inputDot();
};

function convertOperator(keyboardOperator) {
    if (keyboardOperator === "*") return "x";
    if (keyboardOperator === "/") return "/";
    if (keyboardOperator === "+") return "+";
    if (keyboardOperator === "-") return "-";
};

function inputDot() {
    if (currentScreen.textContent.includes(".")) return;

    if (currentScreen.textContent === "") {
        currentScreen.textContent = "0";
        if (currentOperator !== null) {
            secondNumber += "0.";
        } else if (currentOperator === null) {
            firstNumber += "0.";
        };
    } else if (currentScreen.textContent !== "") {
        if (currentOperator !== null) {
            secondNumber += ".";
        } else if (currentOperator === null) {
            firstNumber += ".";
        };
    };

    currentScreen.textContent += ".";
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

        case "x":
            return multiply(firstNumbers, secondNumbers);

        case "/":
            return divide(firstNumbers, secondNumbers);
    };
};
