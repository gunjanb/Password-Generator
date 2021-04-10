//Generate Password function will generate password
//1. Ask user the lenght of password: has to be b/w 8 -128 chars.
//2. Validate input lenght: check in b/w 8 -128 as well as it should be a number.
//3. Ask user whether want to have a number ,special char,uppercase or lowercase in password.
//4. Check whether user atleast selected one choice.
//5. Generate password.

//array holding numbers,lowercase,uppercase, and special chars for reference
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "]",
];
var upperCasechar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCasechar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//set global variable
var passwordLength = 0;
var isSpecialchar = false;
var isNumericChar = false;
var isUppercasechar = false;
var isLowercasechar = false;

// get an handle for generate button
var generateBtn = document.querySelector("#generate");

// get an handle for textarea
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

//this function will set users uppercase,lowercase,numeric and special char criterias.
function getOthercriteria() {
  // ask user for special char
  isSpecialchar = window.confirm(
    "Want to include special chars (ex- %^&*)? Press OK."
  );

  //ask user for uppercase char
  isUppercasechar = window.confirm(
    "Want to include uppercase chars? Press OK."
  );

  //ask user for lowercase char
  isLowercasechar = window.confirm(
    "Want to include lowercase chars? Press OK."
  );

  //ask user for numeric char
  isNumericChar = window.confirm("Want to include numeric chars Press OK.");

  //validate if atleast one is selcted
  if (isNumericChar || isSpecialchar || isUppercasechar || isLowercasechar) {
    return;
  } else {
    alert("Please select atleast one char type.");
    getOthercriteria();
  }
}

// this function will get password length from user and validate it.
// when got passwordlenght will ask for other criteria by calling getothercriteria function.
function getPasswordcriteria() {
  // ask user for password lenght
  passwordLength = window.prompt(
    "Please enter required lenght of password? Valid range is  between 8 - 128",
    "8-128"
  );
  // Validate input lenght: check in b/w 8 -128 as well as it should be a number.
  //console.log("User entered password Lenght :" + passwordLength);
  if (passwordLength == null) {
    alert("User don't want to generate password.");
    return;
  } else if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    window.alert("Please provide valid password length.");
    getPasswordcriteria();
  } else {
    //get other criterias
    getOthercriteria();
  }
  return;
}

//this function sets all the user criterias and generate a password
function generatePassword() {
  //Resetting the criterias before new password generation

  isSpecialchar = false;
  isUppercasechar = false;
  isLowercasechar = false;
  isNumericChar = false;
  // get user inputs
  getPasswordcriteria();

  //selection set based on criterias
  var selectionSet = [];

  //user generated password based on selected criteria
  var userPassword = [];

  //add special char if user conform
  if (isSpecialchar === true) {
    let passwordChar =
      specialChar[Math.floor(Math.random() * (specialChar.length - 1))];
    userPassword.push(passwordChar);
    selectionSet = selectionSet.concat(specialChar);
    // console.log("selectionset is " + selectionSet);
  }

  //add uppercase char if user conform
  if (isUppercasechar === true) {
    let passwordChar =
      upperCasechar[Math.floor(Math.random() * (upperCasechar.length - 1))];
    userPassword.push(passwordChar);
    selectionSet = selectionSet.concat(upperCasechar);
    //console.log("selectionset is " + selectionSet);
  }

  //addlowercase char if user conform
  if (isLowercasechar === true) {
    let passwordChar =
      lowerCasechar[Math.floor(Math.random() * (lowerCasechar.length - 1))];
    userPassword.push(passwordChar);
    selectionSet = selectionSet.concat(lowerCasechar);
    //console.log("selectionset is " + selectionSet);
  }

  //addnumeric char if user conform
  if (isNumericChar === true) {
    let passwordChar =
      numericChar[Math.floor(Math.random() * (numericChar.length - 1))];
    userPassword.push(passwordChar);
    selectionSet = selectionSet.concat(numericChar);
    //console.log("selectionset is " + selectionSet);
  }

  //set no of more chars need to be added
  var remainingLength = passwordLength - userPassword.length;
  // console.log("Password Lenght user what selected is " + passwordLength);
  // console.log("Current Password length is " + userPassword.length);
  // console.log("Remaining length  is " + remainingLength);

  // fill the the remaining pwd lenght from Selection set
  for (var i = 0; i < remainingLength; i++) {
    let passwordChar =
      selectionSet[Math.floor(Math.random() * (selectionSet.length - 1))];
    userPassword.push(passwordChar);
  }
  // convert array into string without commas
  // console.log("Value  of  current password is " + userPassword);
  // console.log("Value of password as string is " + userPassword.join(""));
  var userGeneratedpassword = userPassword.join("");
  return userGeneratedpassword;
}
