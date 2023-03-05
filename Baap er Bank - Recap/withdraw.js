// adding event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // getting withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputString);

    // clear the withdraw input
    withdrawInput.value = '';

    // withdraw validation
    if (isNaN(withdrawInputNumber) || withdrawInputNumber <= 0) {
        alert('plese input valid numbers!');
        return;
    }

    // getting pre withdraw
    const withdrawPre = document.getElementById('withdraw-total');
    const withdrawPreString = withdrawPre.innerText;
    const withdrawPreNumber = parseFloat(withdrawPreString);

    // getting pre balance
    const balancePre = document.getElementById('balance-total');
    const balancePreString = balancePre.innerText;
    const balancePreNumber = parseFloat(balancePreString);

    // withdraw validation
    if (withdrawInputNumber > balancePreNumber) {
        alert('bank e eto taka nai');
        return;
    }

    // calculate new withdraw
    const withdrawNew = withdrawPreNumber + withdrawInputNumber;
    withdrawPre.innerText = withdrawNew;

    // calculate new balance 
    const balanceNew = balancePreNumber - withdrawInputNumber;
    balancePre.innerText = balanceNew;
});