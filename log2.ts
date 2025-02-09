const password2=document.getElementById("password1")as HTMLInputElement
const uname2=document.getElementById("username1") as HTMLInputElement
const login=document.getElementById("submit1")as HTMLInputElement
const result=document.getElementById("val2")as HTMLInputElement
function check():void{
   const pass2=password2.value;
    const name2=uname2.value;
    const nameget=localStorage.getItem("usname");
    const passget=localStorage.getItem("password");
    if(name2==nameget && pass2==passget)
    {
      result.textContent="Successful";
      alert("Register Successfully");        
      window.location.href="home.html";
    }    else{
        alert("Username or password mismatch")
    }
  }login.addEventListener("click",check);
