function operate(firstNumber, operator, secondNumber) {
    if (operator === "*") {
        return firstNumber * secondNumber;
    } else if (operator === "/") {
        return firstNumber / secondNumber;
    } else if (operator === "+") {
        return firstNumber + secondNumber;
    } else if (operator === "-") {
        return firstNumber - secondNumber;
    };
};
console.log(operate(1, '-', 12));
