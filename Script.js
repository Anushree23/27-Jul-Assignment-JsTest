
var btn = document.getElementById("btn")
function name() {
  var inpObj = document.getElementById("name").value;
  if (inpObj.length <3) {
    document.getElementById("name").innerHTML = "Username must be atleast 3 characters";
  } else {
    document.getElementById("name").innerHTML = "";
  } 

  var inpObj1 = document.getElementById("email").value;
  if (inpObj1 == "") {
    document.getElementById("email").innerHTML = "Email is valid";
  } else {
    document.getElementById("email").innerHTML = "";
  } 

  var inpObj2 = document.getElementById("password").value;
  if (inpObj2.length <6) {
    document.getElementById("password").innerHTML = "Password must be atleast 3 characters";
  } else {
    document.getElementById("password").innerHTML = "";
  } 

  var inpObj3 = document.getElementById("password2").value;
  if (inpObj2 != inpObj3  ) {
    document.getElementById("password2").innerHTML = "Password 2 is not same as password 1";
  } else {
    document.getElementById("password2").innerHTML = "";
  } 

} 


btn.addEventListener('click',username)