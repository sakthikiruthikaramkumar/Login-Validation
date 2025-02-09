var password1 = document.getElementById("password");
var uname1 = document.getElementById("username");
var email1 = document.getElementById("email");
var btn = document.getElementById("s1");
var res = document.getElementById("val1");
var isUpperCase = new RegExp(/(?=.*[A-Z])/g);
var isSpecialChar = new RegExp(/(?=.*[!@#$%^&*])/g);
var isLowerCase = new RegExp(/(?=.*[a-z])/g);
var isNumeric = new RegExp(/(?=.*[0-9])/g);
function printEnteredvalue() {
    var pass1 = password1.value;
    var name1 = uname1.value;
    var email = email1.value;
    if (pass1.length >= 8 && name1.length > 0) {
        if (pass1.match(isUpperCase) && pass1.match(isLowerCase) && pass1.match(isSpecialChar) && pass1.match(isNumeric)) {
            res.textContent = "Valid Password ";
            localStorage.setItem("usname", name1);
            localStorage.setItem("password", pass1);
            localStorage.setItem("email", email);
            alert("Register Successfully");
            window.location.href = "login.html";
        }
        else {
            res.textContent = "Must contain 1 Uppercase,1 Lowercase, 1 Special Character & 1 Numeric Value";
        }
    }
    else {
        res.textContent = "Fields cann't be empty and Length of password must be greater than 7";
    }
}
btn.addEventListener("click", printEnteredvalue);
