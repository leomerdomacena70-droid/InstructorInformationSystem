
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector("[data-popup-message]");

    if (popup) {
        alert(popup.dataset.popupMessage);
    }

    document.querySelectorAll("form").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            const password = form.querySelector("#Password");
            const confirmPassword = form.querySelector("#ConfirmPassword");

            if (password && confirmPassword && password.value !== confirmPassword.value) {
                event.preventDefault();
                alert("Password and Confirm Password do not match.");
            }
        });
    });

    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("passwordField");

    if (togglePassword && passwordField) {
        togglePassword.addEventListener("click", function () {
            const isPassword = passwordField.type === "password";
            passwordField.type = isPassword ? "text" : "password";
            togglePassword.textContent = isPassword ? "Hide password" : "Show password";
        });
    }
});
