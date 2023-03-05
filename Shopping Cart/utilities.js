// function for updating case input
function updateCaseNumber(isIncrease) {
    // getting pre case input value
    const caseNumberField = document.getElementById('case-number-input');
    const caseNumberFieldString = caseNumberField.value;
    const preCaseNumber = parseInt(caseNumberFieldString);

    // increase increase/decrease input value
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = preCaseNumber + 1;
    }
    else {
        newCaseNumber = preCaseNumber - 1;
    }

    // set input value
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
};

// function for updating case total
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalValue = document.getElementById('case-total');
    caseTotalValue.innerText = caseTotalPrice;
};




// function for updating phone input
function updatePhoneNumber(isIncrease) {
    // getting pre phone input value
    const phoneNumberField = document.getElementById('phone-number-input');
    const phoneNumberFieldString = phoneNumberField.value;
    const prePhoneNumber = parseInt(phoneNumberFieldString);

    // increase increase/decrease input value
    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = prePhoneNumber + 1;
    }
    else {
        newPhoneNumber = prePhoneNumber - 1;
    }

    // set input value
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
};

// function for updating phone total
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 59;
    const phoneTotalValue = document.getElementById('phone-total');
    phoneTotalValue.innerText = phoneTotalPrice;
};




// function for calculate case total
function getCaseTextById() {
    const caseTotal = document.getElementById('case-total');
    const caseTotalString = caseTotal.innerText;
    const caseTotalNumber = parseFloat(caseTotalString);
    return caseTotalNumber;
};


// function for calculate phone total
function getPhoneTextById() {
    const phoneTotal = document.getElementById('phone-total');
    const phoneTotalString = phoneTotal.innerText;
    const phoneTotalNumber = parseFloat(phoneTotalString);
    return phoneTotalNumber;
};

// উপরোক্ত ক্যালকুলেট ফাংশনকে একসাথেও লেখা যায়, যাতে যার ID থাকবে তাকেই দেখাবে। সেক্ষেত্রে const variable এর নাম গুলোও পরিবর্তন করে দিলে ভালো হয় যাতে ফোন বা কেস যে কারো জন্য ব্যবহার করা যায়। 
// function getPhoneTextById(elementId) {
//     const phoneTotal = document.getElementById(elementId);
//     const phoneTotalString = phoneTotal.innerText;
//     const phoneTotalNumber = parseFloat(phoneTotalString);
//     return phoneTotalNumber;
// }


// calculate subtotal function
function calculateSubtotal() {
    const phoneTotalNumber = getPhoneTextById();
    const caseTotalNumber = getCaseTextById();

    // calculate total
    const subTotal = phoneTotalNumber + caseTotalNumber;
    const subTotalText = document.getElementById('subtotal-amount');
    subTotalText.innerText = subTotal;

    // calculate tax
    const taxTotalString = (subTotal * 0.1).toFixed(2); // toFixed দ্বারা string হয়ে যাওয়াতে আবার চেঞ্জ করতে হবে। 
    const taxTotal = parseFloat(taxTotalString);
    const taxTotalText = document.getElementById('tax-amount');
    taxTotalText.innerText = taxTotal;

    // calculate final
    const allSum = subTotal - taxTotal;
    const allSumText = document.getElementById('total-amount');
    allSumText.innerText = allSum;
};