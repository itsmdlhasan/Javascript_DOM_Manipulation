// option - 2
function makeGreen() {
    document.body.style.backgroundColor = 'limegreen';
}

// option - 3
const makeGreyButton = document.getElementById('make-grey');
makeGreyButton.onclick =
    function makeGrey() {
        document.body.style.backgroundColor = 'lightgrey';
    }


// option - 4
// document.getElementById('').addEventListener('kon event', function(){})-এটাকে নিম্মোক্তভাবে লিখতে হবে। 
document.getElementById('make-golden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})


// option - 5
function textChange() {
    document.getElementById('text-change').innerText = 'Amake change kora hoyeche';
    // এই লাইন টাকে ভেঙ্গে নিচের মত ২ লাইনে লেখা যায়
    // const headChanger = document.getElementById('text-change');
    // headChanger.innerText = 'Amake change kora hoyeche';
}