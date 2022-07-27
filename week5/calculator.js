let n1 = document.querySelector('#number1');
let n2 = document.querySelector('#number2');
let res = document.querySelector('#result');

function add() {
    res.value = Number(n1.value) + Number(n2.value);
}

function subtract() {
    res.value = Number(n1.value) - Number(n2.value);
} 

function multiply() {
    res.value = Number(n1.value) * Number(n2.value);
}

function divide() {
    if (n2.value == 0){
        alert('Cannot divided by zero');
        return;
    }
    res.value = Number(n1.value) / Number(n2.value);
}

