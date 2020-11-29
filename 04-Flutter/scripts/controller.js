

    
document.getElementsByClassName("auth-button")[0].addEventListener("click", validateForm);
    
    


function validateForm() {
    event.preventDefault();
    document.getElementById('errors').innerHTML = "";
    var passwordInput = document.getElementsByName('password')[0].value;
    var emailInput = document.getElementsByName('email')[0].value;
    if (emailInput.length == 0) {
        document.getElementById('errors').innerHTML += 'Email is required!<br>';
    } else if (emailInput.length < 5) {
        document.getElementById('errors').innerHTML += 'Email must be at least 5 characters.<br>';
    }

    
    

    if (!/[@]/.test(emailInput)) {
        document.getElementById('errors').innerHTML += 'Email must contain "@"!<br>';
    }

    if (!/[.]/.test(emailInput)) {
        document.getElementById('errors').innerHTML += 'Email must contain "."!<br>';
    }

    if (passwordInput.length < 6) {
        document.getElementById('errors').innerHTML += 'Password must be at least 6 characters.<br>';
    }

    if (!/[A-Z]/.test(passwordInput)) {
        document.getElementById('errors').innerHTML += 'Password should contain at least one uppercase letter.<br>';

    }

    if (!/[0-9]/.test(passwordInput)) {
        document.getElementById('errors').innerHTML += 'Password should contain at least one digit.<br>';

    }

    if (!/[!@#$%^&]/.test(passwordInput)) {
        document.getElementById('errors').innerHTML += 'Password should contain at least one the special symbols "!@#$%^&".<br>';

    }

    

    
    if (document.getElementById('errors').innerHTML == "") {
        var buttonId = document.getElementsByClassName("auth-button")[0].id;
        if (buttonId == "regButton") {
            
            alert("Регистрацията е успешна");
            let username = document.getElementsByName('username')[0].value;
            window.auth.register(username, emailInput, passwordInput, function(isSuccesful, errorCode, errorMessage) {
                if (isSuccesful) {
                    window.location.href = "posts.html";
                } else {
                    document.getElementsByClassName('errors')[0].innerHTML += errorMessage;
                }
            } )
        } 
    } 

    
  }

  
 