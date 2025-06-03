const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');

    } else {
        alert('Invalid username or password.');
    }
});

/* ================================================ */

function redirectToAbout() {
    window.location.href = 
    "about.html";
}


