// adding event listener to the phone plus button
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    // updating phone total
    updatePhoneTotalPrice(newPhoneNumber);

    // calculate subtotal
    calculateSubtotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    // updating phone total
    updatePhoneTotalPrice(newPhoneNumber);

    // calculate subtotal
    calculateSubtotal();
});