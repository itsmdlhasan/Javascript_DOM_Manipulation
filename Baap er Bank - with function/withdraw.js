// adding event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // getting withdraw input and clear input 
    const withdrawInputNumber = getNewInput('withdraw-input');

    // withdraw validation
    if (isNaN(withdrawInputNumber) || withdrawInputNumber <= 0) {
        alert('plese input valid numbers!');
        return;
    }

    // getting pre withdraw
    const withdrawPreNumber = getPreAmount('withdraw-total');

    // getting pre balance
    const balancePreNumber = getPreAmount('balance-total');

    // withdraw validation
    if (withdrawInputNumber > balancePreNumber) {
        alert('bank e eto taka nai');
        return;
    }
    
    // calculate new withdraw
    const withdrawNew = withdrawPreNumber + withdrawInputNumber;

    // set withdraw total
    setNewTotal('withdraw-total', withdrawNew);

    // calculate new balance 
    const balanceNew = balancePreNumber - withdrawInputNumber;

    // set new balance total
    setNewTotal('balance-total', balanceNew);
});