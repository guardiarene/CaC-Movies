document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = emailField.value.trim();
        const passwordInput = passwordField.value.trim();

        errorMessage.innerHTML = '';

        if (!emailInput || !passwordInput) {
            displayError("Por favor, complete todos los campos.");
        } else if (!isValidEmail(emailInput)) {
            displayError("Por favor, ingrese un correo electrónico válido.");
        } else {
            alert("¡Bienvenido!");
            form.submit();
        }
    });

    function displayError(message) {
        errorMessage.innerHTML = message;
        errorMessage.style.display = 'block';
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});