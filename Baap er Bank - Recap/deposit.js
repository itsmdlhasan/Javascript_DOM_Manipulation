// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // getting deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositInputString = depositInput.value;
    const depositInputNumber = parseFloat(depositInputString);
    
    // clear the deposit input after getting value
    depositInput.value = '';

    // deposit validation
    if (isNaN(depositInputNumber) || depositInputNumber <= 0) {
        alert('please input valid numbers!');
        return;
    }
    
    // getting pre deposit
    const depositPre = document.getElementById('deposit-total');
    const depositPreString = depositPre.innerText;
    const depositPreNumber = parseFloat(depositPreString);

    // calculate new deposit
    const depositNew = depositPreNumber + depositInputNumber;
    depositPre.innerText = depositNew;

    // getting pre balance
    const balancePre = document.getElementById('balance-total');
    const balancePreString = balancePre.innerText;
    const balancePreNumber = parseFloat(balancePreString);

    // calculate new balance
    const balanceNew = balancePreNumber + depositInputNumber;
    balancePre.innerText = balanceNew;
});