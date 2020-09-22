const form = document.getElementById("fill-form");

function onSubmit(event) {
  event.preventDefault();

  const firstName = form.elements["firstname"].value;
  const middleName = form.elements["middlename"].value;
  const lastName = form.elements["lastname"].value;
  const phoneNumber = form.elements["number"].value;
  const emailAddress = form.elements["email"].value;
  const houseAddress = form.elements["houseaddress"].value;

  localStorage.setItem("firstname", firstName);
  localStorage.setItem("middlename", middleName);
  localStorage.setItem("lastname", lastName);
  localStorage.setItem("number", phoneNumber);
  localStorage.setItem("email", emailAddress);
  localStorage.setItem("houseaddress", houseAddress);

  if (
    firstName == "" ||
    middleName == "" ||
    lastName == "" ||
    phoneNumber == "" ||
    emailAddress == "" ||
    houseAddress == ""
  ) {
    alert(`Kindly fill all the fields before your CV can be generated.`);
  } else {
    alert(`Hello ${firstName} ${middleName} ${lastName}, \n
    Your CV will be generated soon.`);
    window.open("cv.html", "_self");
    form.reset();
  }
}

form.addEventListener("submit", onSubmit);
