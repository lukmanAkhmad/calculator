const screenDisplay = document.querySelector(".screen");
const lastScreen = document.querySelector(".last-screen");
const currentScreen = document.querySelector(".current-screen");
const buttonNumber = document.querySelectorAll(".button-number");
const buttonOperator = document.querySelectorAll("#button-operator");
const buttonEquals = document.querySelector(".button-equals");

buttonEquals.addEventListener("click", evaluate);

let firstNumber = "";
let currentOperator = null;
let secondNumber = "";

buttonNumber.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (currentOperator !== null) {
            secondNumber += elem.textContent;
            enterNumberToScreen(secondNumber)
            console.log(`Second Number = ${secondNumber}`)
        } else if (currentOperator === null) {
            firstNumber += elem.textContent;
            enterNumberToScreen(firstNumber)
            console.log(`First Number = ${firstNumber}`)
        }
    });
});

buttonOperator.forEach((elem) => {
    elem.addEventListener("click", () => {
        setOperation(elem.textContent);
    });
});

function enterNumberToScreen(number) {
    currentScreen.textContent = number;
};

function setOperation(operator) {
    currentOperator = operator;
    if(currentOperator !== null){
        firstNumber = currentScreen.textContent;
        secondNumber = "";
    };
    lastScreen.textContent = `${firstNumber} ${currentOperator}`;

};

function evaluate(){
    currentScreen.textContent = convertToDecimal(
        operate(currentOperator,firstNumber,secondNumber)
    );
    lastScreen.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
};

function convertToDecimal(number){
    return Math.round(number * 1000) / 1000;
}

buttonEquals.addEventListener("click", () => {
    console.log("button equals")
})

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
