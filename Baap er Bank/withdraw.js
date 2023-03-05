// adding event handler on the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // getting withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInput.value;
    const withdrawInputValue = parseFloat(withdrawInputString);

    // clear withdraw input
    withdrawInput.value = '';
    
    if (isNaN(withdrawInputValue) || withdrawInputValue < 0) {
        alert('please provide valid number!');
        return;
    }

    // getting pre withdraw
    const withdrawPre = document.getElementById('withdraw-total');
    const withdrawPreValueString = withdrawPre.innerText;
    const withdrawPreValue = parseFloat(withdrawPreValueString);

    // getting pre balance
    const balancePre = document.getElementById('balance-total');
    const balancePreValueString = balancePre.innerText;
    const balancePreValue = parseFloat(balancePreValueString);
    
    

    if (withdrawInputValue > balancePreValue) {
        alert('eto taka nai');
        return;
    }

    // update withdraw
    const withdrawTotal = withdrawInputValue + withdrawPreValue;
    withdrawPre.innerText = withdrawTotal;

    // update balance
    const balanceUpdate = balancePreValue - withdrawInputValue;
    balancePre.innerText = balanceUpdate;
});