const button = document.getElementById("buttons");
const display = document.querySelector("#display");


button.addEventListener("click", function (event) {

    if (event.target.innerText == "=")
    {
        splitUp(display.innerHTML);
    } else {
        display.innerHTML += event.target.innerText;
    }
});

function splitUp(display) {
    var firstNumber;
    var secondNumber;
    var operator;
    if (display.indexOf("+") != -1)
    {
        firstNumber = display.split("+")[0];
        secondNumber = display.split("+")[1];
        operator = "+";
    } else if (display.indexOf("-") != -1) {
        firstNumber = display.split("-")[0];
        secondNumber = display.split("-")[1];
        operator = "-";
    } else if (display.indexOf("/") != -1) {
        firstNumber = display.split("/")[0];
        secondNumber = display.split("/")[1];
        operator = "/";
    } else if (display.indexOf("*") != -1) {
        firstNumber = display.split("*")[0];
        secondNumber = display.split("*")[1];
        operator = "*";
    } else {
        throw new Error(); // do stuff
    }
    if (firstNumber == undefined || secondNumber == undefined) {
        throw new Error(); // do stuff
    }
    display.innerHTML = "";
    calculate(firstNumber, secondNumber, operator);
}

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            display.innerHTML = Number(firstNumber) + Number(secondNumber);
            break;
        case "-":
            display.innerHTML = Number(firstNumber) - Number(secondNumber);
            break;
        case "/":
            display.innerHTML = Number(firstNumber) / Number(secondNumber);
            break;
        case "*":
            display.innerHTML = Number(firstNumber) * Number(secondNumber);
            break;
        default:
            throw new Error(); // do stuff
            break;
    }
}



