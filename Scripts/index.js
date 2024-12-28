const loginForm = document.getElementById('loginForm');
const error = document.getElementById('Error');

//Credentials
const Credentials= {
    admin: {
        email:"admin@empher.com",
        password:"empher@123",
        redirect:"admin.html",
        alert:"Logged in as Admin",
    },
    user: {
        email:"user@empher.com",
        password:"user@123",
        redirect:"books.html",
        alert:"LOgged in as User",
    },
};

//Login for submission handler
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //input values
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;

    //Admin credentials
    if(email === Credentials.admin.email && password=== Credentials.admin.password) {
        alert(Credentialsls.admin.alert);
        localStorage.setItem('loginData', JSON.stringify({role: 'Admin', email}));
        window.location.href = Credentials.admin.redirect;
    }
    //User credentials
    else if(email=== credentials.user.email && password === credentials.user.password) {
        alert(credentials.user.alert);
        localStorage.setItem('loginData', JSON.stringify({role: 'User', email}));
        window.location.href= credentials.user.redirect;
    }
    //Invalid credentials
    else {
        errorMessage.textContent = "Invalid email or password. Please try again";
    }
});
