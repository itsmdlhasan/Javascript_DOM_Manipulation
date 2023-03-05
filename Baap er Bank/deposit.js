// adding event handler to deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // getting deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositInputValueString = depositInput.value;
    const depositInputValue = parseFloat(depositInputValueString);

    // clear deposit input
    depositInput.value = '';

    if (isNaN(depositInputValue) || depositInputValue < 0) {
        alert('please provide valid numbers!');
        return;
    }

    // getting pre deposit
    const depositPre = document.getElementById('deposit-total');
    const depositPreValueString = depositPre.innerText;
    const depositPreValue = parseFloat(depositPreValueString);

    // update deposit
    const depositTotal = depositPreValue + depositInputValue;
    depositPre.innerText = depositTotal;

    // getting pre balance
    const balancePre = document.getElementById('balance-total');
    const balancePreValueString = balancePre.innerText;
    const balancePreValue = parseFloat(balancePreValueString);

    // update balance
    const balanceTotal = balancePreValue + depositInputValue;
    balancePre.innerText = balanceTotal;
});