let currentInput = '';

document.querySelectorAll('.nobut').forEach(button =>{
    button.addEventListener('click', () => {
        appendToDisplay(button.getAttribute('data-value'));
    });
});

document.querySelectorAll('.opbut').forEach(button =>{
    button.addEventListener('click', () => {
        appendToDisplay(button.getAttribute('data-value'));
    });
});

document.getElementById('clear').addEventListener('click', clearDisplay);

document.querySelector('.calc').addEventListener('click', calculate);

function clearDisplay(){
    currentInput = '';
    updateDisplay();
}

function appendToDisplay(value){
    currentInput += value;
    updateDisplay();
}

function calculate(){
    let operators = [];
    let numbers = [];
    const inputArray = currentInput.split(/([+\-*/])/);
    for (let item of inputArray){
        if (/[+\-*/]/.test(item)){
            operators.push(item);
        } 
         else 
        {
            numbers.push(parseFloat(item));
        }
    }

    let result = numbers[0];
    for (let i = 0; i < operators.length; i++){
        const operator = operators[i];
        const nextNumber = numbers[i + 1];

        if (operator === '+'){
            result += nextNumber;
        } else if (operator === '-'){
            result -= nextNumber;
        } else if (operator === '*'){
            result *= nextNumber;
        } else if (operator === '/'){
            result /= nextNumber;
        }
    }
    currentInput = result.toString();
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').value = currentInput;
}
