const output = document.getElementById("main");
const sub = document.getElementById("sub");

let num1;
let num2;
let op;

function clickNumber(button) {
    output.innerHTML += button.innerHTML;
}

function clickOperator(button) {
    if (output.innerHTML !== "") {
        num1 = Number.parseFloat(output.innerHTML);
        output.innerHTML = "";
        op = button.innerHTML;
        sub.innerHTML = num1 + " " + op;
    }
}

function clickEqual() {
    if (num1 !== "") {
        num2 = Number.parseFloat(output.innerHTML);
        sub.innerHTML += " " + num2 + " = ";
    }
    switch (op) {
        case "+":
            output.innerHTML = add(num1,num2);
            break;
        case "-":
            output.innerHTML = subtract(num1,num2);
            break;
        case "*":
            output.innerHTML = multiply(num1,num2);
            break;
        case "/":
            output.innerHTML = divide(num1,num2);
            break;
        default:
            break;
    }
    num1 = ""
    num2 = ""
    op = ""
}

function clickAC() {
    num1 = ""
    num2 = ""
    op = ""
    output.innerHTML = ""
    sub.innerHTML = ""
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0)
        return num1 / num2;
    return "Error";
}

