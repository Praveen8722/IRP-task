document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === 'praveen' && password === 'praveen@123') {
        alert('Login successful!');
       
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

