var password2 = document.getElementById("password1");
var uname2 = document.getElementById("username1");
var login = document.getElementById("submit1");
var result = document.getElementById("val2");
function check() {
    var pass2 = password2.value;
    var name2 = uname2.value;
    var nameget = localStorage.getItem("usname");
    var passget = localStorage.getItem("password");
    if (name2 == nameget && pass2 == passget) {
        result.textContent = "Successful";
        alert("Register Successfully");
        window.location.href = "home.html";
    }
    else {
        alert("Username or password mismatch");
    }
}
login.addEventListener("click", check);
