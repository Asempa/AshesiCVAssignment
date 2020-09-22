const firstName = localStorage.getItem("firstname");
const middleName = localStorage.getItem("middlename");
const lastName = localStorage.getItem("lastname");
const number = localStorage.getItem("number");
const email = localStorage.getItem("email");
const houseAddress = localStorage.getItem("houseaddress");

document.getElementById(
  "fullname"
).innerHTML = `${firstName} ${middleName} ${lastName}`;
document.getElementById("phonenumber").innerHTML = number;
document.getElementById("useremail").innerHTML = email;
document.getElementById("houseaddress").innerHTML = houseAddress;
