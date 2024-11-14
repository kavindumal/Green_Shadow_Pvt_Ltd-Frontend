window.location.href = '/pages/loginPage.html';

window.addEventListener('load', function () {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    loadingOverlay.style.animation = 'fadeOut 1s ease';
    
    loadingOverlay.addEventListener('animationend', () => {
      loadingOverlay.style.display = 'none';
    });
});

document.querySelector('.login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username) {
        alert("Username cannot be empty.");
    } else if (!password) {
        alert("Password cannot be empty.");
    } else {
        alert("Login successful.");
    }
});