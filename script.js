

const registrationForm = document.getElementById("registrationForm");

if(registrationForm){

    registrationForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Registration Successful!");
    });
}



const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Login Successful!");
    });
}