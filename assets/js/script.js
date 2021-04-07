// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate Password function will generate password
//1. Ask user the lenght of password: has to be b/w 8 -128 chars.
//2. Validate input lenght: check in b/w 8 -128 as well as it should be a number.
//3. Ask user whether want to have a number ,special char,uppercase or lowercase in password.
//4. Check whether user atleast selected one choice.
//5. Generate password.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
