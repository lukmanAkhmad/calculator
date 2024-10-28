const screenDisplay = document.querySelector(".screen");
const lastScreen = document.querySelector(".last-screen");
const currentScreen = document.querySelector(".current-screen");
const buttonNumber = document.querySelectorAll(".button-number");
const buttonOperator = document.querySelectorAll("#button-operator");
const buttonEquals = document.querySelector(".button-equals");

let firstNumber = "";
let operator = null;
let secondNumber = "";

buttonNumber.forEach((elem) => {
    elem.addEventListener("click", () => {
        enterNumberToScreen(elem.textContent);
    });
});

function enterNumberToScreen(number){
    currentScreen.textContent += number
};

function setOperate(){
    firstNumber = currentScreen.textContent;
}

buttonOperator.forEach((elem) => {
    elem.addEventListener("click", () => {
        operator = elem.textContent;
        displayValue = operator;
        screenDisplay.textContent = `${firstNumber} ${operator}`;
        return opClicked = true;
    })
})

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
            add(firstNumbers, secondNumbers);
            break;
        case "-":
            subtract(firstNumbers, secondNumbers);
            break;
        case "*":
            multiply(firstNumbers, secondNumbers);
            break;
        case "/":
            divide(firstNumbers, secondNumbers);
            break;
    };
};
console.log(operate('+', 1, 2));

// nomor yang diinput dengan button harus disimpan di firstNumber dan secondNumber
// setehal itu nilai keduanya disimpan ke displayValue untuk ditampilkan
// jika button operator ditekan maka value disimpan di secondNumber