// step-1: Add event listener to the submit button
document.getElementById('button-submit').addEventListener('click', function(){
    // step-2: Get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT CHECK EMAIL and PASSWORD ON THE CLIENT SIDE
    // step-4: verify your email and password
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Your email and password combination did not match!');
    }
});