document.getElementById('text-changer').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputtedText = inputField.value;

    const changeableText = document.getElementById('changeable-text');
    changeableText.innerText = inputtedText + ' (I am updated)';
    inputField.value = '';
});