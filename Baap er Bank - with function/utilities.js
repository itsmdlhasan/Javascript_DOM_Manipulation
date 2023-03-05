// getting inner value number function
function getNewInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber;
};

// getting inner text number function
function getPreAmount(elementId) {
    const preText = document.getElementById(elementId);
    const preTextString = preText.innerText;
    const preTextNumber = parseFloat(preTextString);
    return preTextNumber;
};

// calculate and Setting value function
function setNewTotal(elementId, newValue) {
    const newTotalNumber = document.getElementById(elementId);
    newTotalNumber.innerText = newValue;
};