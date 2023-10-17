function login() {
    document.getElementById("loginFailMsg").innerHTML = "";
    //Get user inputted email address
    let email = document.getElementById("email").value;
    //Get user inputted password
    let password = document.getElementById("password").value; // variable holds data of what user inputs in password field
  
    let userExists = false; // Checks if a user already exists - starts at false
  
    let i = 0;
    while (i < localStorage.length) {
      const users = localStorage.key(i);
      /* If email user inputs is exactly the same as the email in local storage matching the specific user, 
      then "userExists" is true meaning they are registered and do exist in local storage */
      if (email === users) {
        userExists = true; // if the email the user inputted is in local storage, then the user exists and the userExists variable is set to true
        let user = JSON.parse(localStorage.getItem(users)); //Parse the data stored in local storage so the data becomes a JavaScript object - the object is stored in "user" variable
        let userPassword = user.password;
        if (password === userPassword) {
          // If password is the same as a specific user in local storage then the user is logged in
          sessionStorage.currentLoggedInUser = email;
          console.log(user.email + " " + "logged in");
  
          // Creates a link to the game page
          let gameName = "Game";
          let gameLink = gameName.link("game.html");
          // Creates a link to the rankings page
          let rankingName = "Rankings";
          let rankingLink = rankingName.link("rankings.html");
          // message to display users first and last name is logged in
          document.getElementById("loginMsg").innerHTML = "<h1>Welcome "+ user.firstName + " " +user.lastName + "!</h1><br/>You can now play the " + 
          gameLink + " and view your score in " +rankingLink +
          "<br/><br/><br/><br/><br/><br/><br/><br/><br/>";
  
          loginMsg.style.color = "green"; // Changes the above message to green - indicates a successful login
          loginMsg.style.fontSize = "13pt";
          loginMsg.style.fontFamily = "Arial";

          // regMsg.style.color = "red";
          let regMsg = document.getElementById('regMsg');
          regMsg.style.visibility = 'hidden';

          // let styleMsg = document.getElementById("loginMsg").style;
          // styleMsg.position = "relative";
          // styleMsg.top = styleMsg.left = "25%"; 
        }
        // Otherwise if password is not correct then error message is displayed
        else {
          loginFailMsg.style.fontSize = "13pt";
          loginFailMsg.style.fontFamily = "Arial";
          document.getElementById("loginFailMsg").innerHTML =
            "Invalid Password. Try again."; // Message to display password is incorrect
        }
        // Logs to console if a user exists and states which user is logged in currently
        console.log("User Exists? " + userExists);
        console.log("Currently Logged in: \nUser Email: " + sessionStorage.currentLoggedInUser + "\nUser name: " + user.firstName);
      }
      i++;
    }
    // Creates a link to the register page
    let RegistrationName = "Register";
    let RegistrationLink = RegistrationName.link("register.html");
  
    if (userExists === false) {
      // If user inputted email does not match email in local storage - display error message and log result to console
      console.log("User Exists? " + userExists);
      loginFailMsg.style.fontSize = "13pt";
      loginFailMsg.style.fontFamily = "Arial";
      let regMsg = document.getElementById('regMsg');
          regMsg.style.visibility = 'hidden';
      //Display message to user if they don't have an account
      document.getElementById("loginFailMsg").innerHTML =
        "Invalid Email Address. If you don't have an account, " +
        RegistrationLink;
    }
  }
function Functions() {
    login();
}