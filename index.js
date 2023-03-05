let result = document.getElementById("result");

function number(num) {
    result.value += num;
}

function operation(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    result.value = eval(result.value);
}