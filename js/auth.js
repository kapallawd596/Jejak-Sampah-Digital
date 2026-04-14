(function() {
    // Check if we are on login page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('login')) {
        const form = document.getElementById('loginForm');
        const errorDiv = document.getElementById('loginError');
        
        // Redirect if already logged in
        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = 'pages/beranda.html';
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                window.location.href = 'pages/beranda.html';
            } else {
                errorDiv.textContent = 'Username atau password salah!';
            }
        });
    } else {
        // Guard for protected pages
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = '../index.html';
        }

        // Setup Logout globally
        window.logout = function() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.href = '../index.html';
        }
    }
})();