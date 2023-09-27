const form = document.querySelector("#contactForm");
const enterName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const textBox = document.querySelector("#text-box");
const messageError = document.querySelector("#messageError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function validateForm(event) {
    event.preventDefault();
  
    if (checkLength(enterName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(textBox.value, 20) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkIfButtonIsDisabled() {
    if (checkLength(enterName.value, 0) && checkLength(textBox.value, 20) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}

enterName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
textBox.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = `<div class="message">Your message has been sent</div>`;
    form.reset();
}

form.addEventListener("submit", submitForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}