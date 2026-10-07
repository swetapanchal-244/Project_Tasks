function togglePassword() {

    const password = document.getElementById("password");
    const eye = document.getElementById("eye");

    if (password.type === "password") {
        password.type = "text";
        eye.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        password.type = "password";
        eye.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
}

function toggleConfirmPassword() {

    const confirmPassword = document.getElementById("confirmPassword");
    const confirmEye = document.getElementById("confirmEye");

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        confirmEye.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        confirmPassword.type = "password";
        confirmEye.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (fullName.value.trim() === "") {
        alert("Please enter your full name.");
        fullName.focus();
        return;
    }

    if (fullName.value.trim().split(" ").length < 2) {
        alert("Please enter your first and last name.");
        fullName.focus();
        return;
    }

    if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        return;
    }

    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    if (phone.value.trim() === "") {
        alert("Please enter your mobile number.");
        phone.focus();
        return;
    }

    if (!phonePattern.test(phone.value)) {
        alert("Please enter a valid 10-digit mobile number.");
        phone.focus();
        return;
    }

    if (password.value.trim() === "") {
        alert("Please create a password.");
        password.focus();
        return;
    }

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters.");
        password.focus();
        return;
    }

    if (confirmPassword.value.trim() === "") {
        alert("Please confirm your password.");
        confirmPassword.focus();
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        confirmPassword.focus();
        return;
    }

    alert("Registration Successful! ❤️");

    form.reset();

});