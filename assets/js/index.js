document.querySelector('.login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username) {
        alert("Username cannot be empty.");
    } else if (!password) {
        alert("Password cannot be empty.");
    } else {
        window.location.href = 'pages/dashboard.html';
    }
});