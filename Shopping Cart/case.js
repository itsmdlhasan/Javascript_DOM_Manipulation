// adding event listener to the case plus button
document.getElementById('btn-case-plus').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(true);

    // updating case total
    updateCaseTotalPrice(newCaseNumber);

    // calculate subtotal
    calculateSubtotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(false);

    // updating case total
    updateCaseTotalPrice(newCaseNumber);

    // calculate subtotal
    calculateSubtotal();
});