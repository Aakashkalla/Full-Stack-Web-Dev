    const loginBtn = document.getElementById('show-login');
    const signupBtn = document.getElementById('show-signup');
    const loginForm = document.querySelector('.login-container');
    const signupForm = document.querySelector('.signup-container');

    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    signupBtn.addEventListener('click', () => {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });
    
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';

