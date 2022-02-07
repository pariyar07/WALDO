const container = document.querySelector('.container');
const form = document.querySelector('#form');
const formControl = document.querySelectorAll('.form-control');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkPassword = document.querySelector('#checkpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();

    if(usernameValue === ""){
        setErrorFor(username, "Please enter a username");
    } else {
        setSuccessFor(username)
    }

    if(emailValue === ""){
        setErrorFor(email, "Please enter an email");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Please enter a valid email")
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "Please enter a password");
    } else {
        setSuccessFor(password)
    }

    if(checkPasswordValue === "") {
        setErrorFor(checkPassword, "Please enter a same password");
    } else if(checkPasswordValue !== passwordValue) {
        setErrorFor(checkPassword, "Password does not match");
    } else {
        setSuccessFor(checkPassword)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    small.innerText = message;
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}