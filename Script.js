
var btn = document.getElementById("btn")
function username() {
  var inpObj = document.getElementById("username").value;
  if (inpObj.length <3) {
    document.getElementById("un").innerHTML = "Username must be atleast 3 characters";
  } else {
    document.getElementById("un").innerHTML = "";
  } 

  var inpObj1 = document.getElementById("email").value;
  if (inpObj1 == "") {
    document.getElementById("mail").innerHTML = "Email is valid";
  } else {
    document.getElementById("mail").innerHTML = "";
  } 

  var inpObj2 = document.getElementById("password").value;
  if (inpObj2.length <6) {
    document.getElementById("pass").innerHTML = "Password must be atleast 3 characters";
  } else {
    document.getElementById("pass").innerHTML = "";
  } 

  var inpObj3 = document.getElementById("confirmpassword").value;
  if (inpObj2 != inpObj3  ) {
    document.getElementById("cpass").innerHTML = "Password 2 is not same as password 1";
  } else {
    document.getElementById("cpass").innerHTML = "";
  } 

} 


btn.addEventListener('click',username)