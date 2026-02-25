const display = document.getElementById('result');

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
        // A função eval() processa a string matemática
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}