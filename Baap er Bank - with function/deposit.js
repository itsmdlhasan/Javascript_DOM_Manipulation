// adding event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // getting deposit input and clear input
    const depositInputNumber = getNewInput('deposit-input');
    
    // deposit validation
    if (isNaN(depositInputNumber) || depositInputNumber <= 0) {
        alert('please input valid numbers!');
        return;
    }
    
    // getting pre deposit
    const depositPreNumber = getPreAmount('deposit-total');

    // calculate new deposit
    const depositNew = depositPreNumber + depositInputNumber;

    // set new deposit total
    setNewTotal('deposit-total', depositNew);

    // getting pre balance
    const balancePreNumber = getPreAmount('balance-total');

    // calculate new balance
    const balanceNew = balancePreNumber + depositInputNumber;

    // set new balance total
    setNewTotal('balance-total', balanceNew);
});