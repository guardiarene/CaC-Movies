document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let emailInput = document.getElementById("email").value.trim();
        let passwordInput = document.getElementById("password").value.trim();

        if (emailInput === "" || passwordInput === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            alert("¡Bienvenido!");
        }
    });
});