function sum(value1, value2) {
    return value1 + value2;
}

function sub(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    return value1 / value2;
}

let value1 = null;
let value2 = null;
let operator = null;
let result = null;

let prevInput = '';
let prevNumber = 0;
let prevOperation = '';

const resultElem = document.querySelector(".res");

document.querySelector('.calc-container').addEventListener('click', function miep(event) {

    const buttonElem = event.target;

    if (buttonElem.tagName !== 'BUTTON') {
        return;
    }

    const buttonType = buttonElem.getAttribute('data-type');
    const buttonValue = buttonElem.getAttribute('data-value');

    if (buttonType === 'number') {            
        prevInput += buttonValue;
        resultElem.innerText = prevInput;
    } else {
        prevNumber = parseInt(prevInput, 10);

        if (value1 === null) {
            value1 = prevNumber;
        } else {
            value2 = prevNumber;
            
            if (operator === '+') {
                value1 = result = sum(value1, value2);
            } 
    
            if (operator === '-') {
                value1 = result = sub(value1, value2);
            } 
    
            if (operator === '*') {
                value1 = result = multiply(value1, value2);
            } 
    
            if (operator === '/') {
                value1 = result = divide(value1, value2);
            } 
        }

        prevInput = '';
            
        resultElem.innerText = result;
        
        prevInput = '';

        operator = buttonValue;

        if (operator === '=') {
            value1 = null;
        }      
    }
        
    if (buttonType === 'clear') {
       value1 = null;
       value2 = null;
       result = null;
       resultElem.innerText = '0';
    }       
});