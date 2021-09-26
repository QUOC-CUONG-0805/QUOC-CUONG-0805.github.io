"use strict"

let number2 = 0;
let number1 = 0;
let numberOfPreOperator = 0;
let currentOperator = '';
let preOperator = 'equal';

function onNumberClick(el) {
    let value = el.dataset.value;
    console.log("received value: " + value);
    if (value == '.' && number2.toString().includes('.') === false) {
        number2 = number2 + '.';
    } else if (value == 'negative') {
        number2 = number2 * -1;
    } else if (value == 'percent') {
        number2 = Number(number2) / 100;
    } else {
        number2 = Number(number2 + value);
    }
    console.log('number2 ' + number2);
    console.log('number1 ' + number1);
    printToScreen(number2);
};

function printToScreen(value) {
    let screen = document.getElementsByClassName("calculator-value")[0];
    screen.innerHTML = value;
};

function onClearScreen() {
    number1 = 0;
    number2 = 0;
    numberOfPreOperator = 0;
    preOperator = 'equal';
    currentOperator = '';
    printToScreen('0');
}

function onOperationClick(el) {
    let currentOperator = el.dataset.value;

    if (numberOfPreOperator % 2 == 0 && currentOperator !== 'equal') {
        numberOfPreOperator ++;
        preOperator = currentOperator;
        number1 = number2;
        number2 = 0;
        return;
    }
    
    switch (preOperator) {
        case "equal":
            number1 = Number(number2);
            break;
        case "add":
            number1 = Number(number1) + Number(number2);
            break;
        case "subtract":
            number1 = Number(number1) - Number(number2);
            break;
        case "multiply":
            number1 = Number(number1) * Number(number2);
            break;
        case "divide":
            number1 = Number(number1) / Number(number2);
            break;
    }

    console.log('currentOperator ' + currentOperator);
    console.log('preOperator ' + preOperator);
    if (currentOperator !== 'equal' && preOperator !== 'equal') {
        number2 = 0;
    } 
    printToScreen(number1);
};