const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const sanitizedInput = display.value.replace(/[^-()\d/*+.]/g, '');
        display.value = Function(`'use strict'; return (${sanitizedInput})`)();
    } catch (error) {
        display.value = "Error";
    }
}
