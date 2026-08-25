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

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.querySelector("input[type='email']");
    const password = document.getElementById("password");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        alert("Email is required.");
        email.focus();
        return;
    }

    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    if (password.value.trim() === "") {
        alert("Password is required.");
        password.focus();
        return;
    }

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters.");
        password.focus();
        return;
    }

    alert("Login Successful!");

    form.reset();

});