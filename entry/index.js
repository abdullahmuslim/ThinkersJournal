const signup = document.getElementById("signup");
const login = document.getElementById("login");

function switchForm(){
  let display = window.getComputedStyle(signup).getPropertyValue("display");
  if (display === "none"){
    login.style.display = "none";
    login.style.opacity = 0;
    signup.style.display = "unset";
    signup.style.opacity = "1";
  }else{
    signup.style.display = "none";
    signup.style.opacity = 0;
    login.style.display = "unset";
    login.style.opacity = "1";
  }
}