function registerUser() {
  let email = document.getElementById("EmailInput").value;
  //building object to hold user data
  const storedUser = {
    email: document.getElementById("EmailInput").value, // The values of the storedUser object is the data inputted by the user
    password: document.getElementById("PasswordInput").value,
    firstName: document.getElementById("nameInput").value,
    lastName: document.getElementById("surnameInput").value,
    telNum: document.getElementById("numInput").value,
    topScore: 0, // Obtained by playing game
    time: 0, // Obtained by playing game
  };
  let userEmail = storedUser.email; // Accesses email value from storedUser object

  // Checks if user already exists and displays error message
  let i = 0;
  while (i < localStorage.length) {
    const users = localStorage.key(i);
    if (email === users) {
      document.getElementById("regResult").innerHTML =
        "<b>User Already Exists</b>";
      regResult.style.color = "red";
    }
    i++;
  }
  /*Store user details in local storage under the inputted email - 
    email is the key, value is the all the users data converted from an object to string */
  localStorage[userEmail] = JSON.stringify(storedUser);
}
//Display result if they have logged successfully
document.getElementById("regResult").innerHTML;

//Clears local storage
function clearUser() {
  localStorage.clear();
  sessionStorage.clear();
}

function validation() {
  // Regular expression to check phone number is valid - 10 digits long
  const phoneNumberValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let validated = false;
  // Prevents form from being submitted if fields are left blank
  if (document.registrationForm.firstName.value == "") {
    document.getElementById("firstName").innerHTML = "Enter your first name!";
    firstName.style.color = "red";
    disabledButton();
    return false;
  } else {
    document.getElementById("firstName").innerHTML = "";
    originalButton();
  }
  if (document.registrationForm.lastName.value == "") {
    document.getElementById("lastName").innerHTML = "Enter your last name!";
    lastName.style.color = "red";
    disabledButton();
    return false;
  } else {
    document.getElementById("lastName").innerHTML = "";
    originalButton();
  }
  if (document.registrationForm.email.value == "") {
    document.getElementById("email").innerHTML = "Enter your email!";
    email.style.color = "red";
    disabledButton();
    return false;
  } else {
    document.getElementById("email").innerHTML = "";
    originalButton();
  }
  let emailFormat = document.registrationForm.email.value;

  if (emailFormat.includes("@" && ".")) {
    // Checks to see if email inputted in field is the correct format - has to include "@" and "."
    document.getElementById("email").innerHTML = "Valid email address";
    email.style.color = "green";
    originalButton();
  } else {
    document.getElementById("email").innerHTML = "Email not entered correctly";
    email.style.color = "red";
    disabledButton();
    return false;
  }
  if (document.registrationForm.telNum.value == "") {
    document.getElementById("telNum").innerHTML = "Enter your phone number!";
    telNum.style.color = "red";
    disabledButton();
    return false;
  } else {
    document.getElementById("telNum").innerHTML = "";
    originalButton();
  }
  if (document.registrationForm.telNum.value.match(phoneNumberValidation)) {
    //Checks to see if inputted phone number matches regular expression
    document.getElementById("telNum").innerHTML = "Valid Phone Number";
    telNum.style.color = "green"; // message in green if true
    originalButton();
  } else {
    document.getElementById("telNum").innerHTML = "Phone Number not entered correctly";
    telNum.style.color = "red"; // message in red if false
    disabledButton();
    return false;
  }
  if (document.registrationForm.password.value == "") {
    document.getElementById("password").innerHTML = "Enter your password!";
    password.style.color = "red";
    disabledButton();
    return false;
  } else {
    document.getElementById("password").innerHTML = "";
    originalButton();
  }
    passwordInput = document.getElementById("PasswordInput");
    passwordInput.inputPassword = validation;
  // Regular expressions for a strong and medium password - these passwords are acceptable
  const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
  const mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  
  console.log("Password Input: " + PasswordInput.value);
  if (document.registrationForm.PasswordInput.value.match(strongPassword)) {
    PasswordInput.style.color = "green";
    document.getElementById("password").innerHTML = "Strong password";
    password.style.color = "green";
    validated = true;
    console.log("Password is medium or good? " + validated);
    originalButton();

    console.log("Good Password");
  } else if (document.registrationForm.PasswordInput.value.match(mediumPassword)) {
    PasswordInput.style.color = "orange";
    password.style.color = "orange";
    document.getElementById("password").innerHTML = "Medium password";
    validated = true;
    originalButton();
    console.log("Password is medium or good? " + validated);
  } else {
    // Weak passwords are not accepted
    PasswordInput.style.color = "red";
    disabledButton();
    password.style.color = "red";
    document.getElementById("password").innerHTML = "Weak password";
    console.log("Password is medium or good? " + validated);
    validated = false;
  }
// If validated is true then remove buttons and display message
  if (validated) {
    let regButton = document.getElementById("btn1");
    regButton.remove();
    let clearButton = document.getElementById("btn");
    // clearButton.remove();
    //Inform user they have registered successfully
    document.getElementById("regResult").innerHTML =
      "<b>Registration successful.</b>";
  }
  return true;
}
// Function which disables register button and changes colour
function disabledButton() {
  document.getElementById("btn1").style.background = "grey";
  document.getElementById("btn1").disabled;
  document.getElementById("btn1").style.border = "5px solid darkgrey";
}
// Function to switch back to normal button when necessary
function originalButton() {
  document.getElementById("btn1").style.background = "blue";
  document.getElementById("btn1").style.border = "5px solid darkblue";
}

// Function to call of functions - this function is called when button "Register" is clicked on registration page
function Functions() {
  validation();
  registerUser();
}
