const password1=document.getElementById("password")as HTMLInputElement
const uname1=document.getElementById("username") as HTMLInputElement
const email1=document.getElementById("email") as HTMLInputElement
const btn=document.getElementById("s1")as HTMLInputElement
const res=document.getElementById("val1")as HTMLInputElement
const isUpperCase = new RegExp(/(?=.*[A-Z])/g);
const isSpecialChar = new RegExp(/(?=.*[!@#$%^&*])/g); 
const isLowerCase = new RegExp(/(?=.*[a-z])/g);
const isNumeric = new RegExp(/(?=.*[0-9])/g);
function printEnteredvalue():void{
    const pass1=password1.value;
    const name1=uname1.value;
    const email=email1.value;
   if(pass1.length >=8 && name1.length >0){    if(pass1.match(isUpperCase)&&pass1.match(isLowerCase)&&pass1.match(isSpecialChar)&&pass1.match(isNumeric)){
        res.textContent="Valid Password ";
        localStorage.setItem("usname",name1); 
        localStorage.setItem("password",pass1); 
        localStorage.setItem("email",email); 
alert("Register Successfully");        
window.location.href="login.html";
    }
    else{ res.textContent="Must contain 1 Uppercase,1 Lowercase, 1 Special Character & 1 Numeric Value";
    }}
  else{
    res.textContent="Fields cann't be empty and Length of password must be greater than 7";
  }
   }
btn.addEventListener("click",printEnteredvalue);
