function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userSpace = userEntered.includes(" ");

  //Error when the entered Username is less than 6 characters
  if (userEntered.length < 6) {
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  } else {
      //Turn the username items green
      document.getElementById("usernameGroup").classList.add("has-success");
  }

  if (userSpace == true) {
    //Searches the string to look for a space and returns an error if true
    document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  } else {
    //Turn the username items green
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  /*-----------------------------------------------------------------------*/

  //Show message that there is an error with the password...
  if (passEntered.toLowerCase() == "password" ){
    document.getElementById("passwordError").innerHTML="Password cannot be 'password'";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else {
    //Turn the password items green
    document.getElementById("passwordGroup").classList.add("has-success");
  }

  if (userEntered == passEntered) {
    document.getElementById("passwordError").innerHTML="Password cannot match Username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else {
    //Turn the password items green
    document.getElementById("passwordGroup").classList.add("has-success");
  }

  if (passEntered.length < 6 || passEntered.length > 20) {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else {
    //Turn the password items green
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
