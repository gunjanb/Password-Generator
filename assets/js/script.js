// Assignment Code
var generateBtn = document.querySelector("#generate");

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
//fullSelectionset will have all the reference option for password generation.
var fullSelectionset = numericChar.concat(
  specialChar,
  upperCasechar,
  lowerCasechar
);

var passwordLength = 0;
var otherCriteria = ["false", "false", "false", "false"];
var userPassword = [];

//console.log(fullSelectionset);

function getOthercriteria() {
  let remainingCriteria = [];
  console.log("remainingCriteria @start" + remainingCriteria);
  //ask user for special char
  remainingCriteria[0] = window.confirm(
    "Want to include special chars Press OK"
  );
  remainingCriteria[1] = window.confirm(
    "Want to include uppercase chars Press OK"
  );
  remainingCriteria[2] = window.confirm(
    "Want to include lowercase chars Press OK"
  );
  remainingCriteria[3] = window.confirm(
    "Want to include numeric chars Press OK"
  );

  //validate if atleast one is selcted
  if (
    remainingCriteria[0] ||
    remainingCriteria[1] ||
    remainingCriteria[2] ||
    remainingCriteria[3]
  ) {
    return remainingCriteria;
  } else {
    alert("Please select atleast one  choice");
    getOthercriteria();
  }
}

function getPasswordcriteria() {
  // ask user for password lenght
  passwordLength = window.prompt(
    "Please enter required lenght of password? Valid range is  between 8 - 128"
  );
  // Validate input lenght: check in b/w 8 -128 as well as it should be a number.
  console.log("password lenght:" + passwordLength);
  if (passwordLength == null) {
    alert("User don't want to generate password");
    return;
  } else if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    console.log("inside incorrect  length");
    window.alert("Please provide valid password length");
    getPasswordcriteria();
  } else {
    //ask user for numeric char, special char ,uppercase,lowercase
    //index 0 : special char, 1: uppercase, 2:lowercase, 3:numeric
    otherCriteria = getOthercriteria();
    console.log(otherCriteria);
  }

  return otherCriteria;
}

function generatePassword() {
  // get user inputs
  let userCriteria = getPasswordcriteria();
  // add special char in password if user confirmed
  if (otherCriteria[0]) {
    let passwordChar =
      specialChar[Math.floor(Math.random() * (specialChar.length - 1))];
    userPassword.push(passwordChar);
  }

  // add uppercase char in password if user confirmed

  console.log("val of password char is " + userPassword);

  if (otherCriteria[1]) {
    let passwordChar =
      upperCasechar[Math.floor(Math.random() * (upperCasechar.length - 1))];
    userPassword.push(passwordChar);
  }

  console.log("val of password char is " + userPassword);

  //add lowercase char in password if user confirmed
  if (otherCriteria[2]) {
    let passwordChar =
      lowerCasechar[Math.floor(Math.random() * (lowerCasechar.length - 1))];
    userPassword.push(passwordChar);
  }

  //add numeric char in password if user confirmed

  console.log("val of password char is " + userPassword);

  if (otherCriteria[3]) {
    let passwordChar =
      numericChar[Math.floor(Math.random() * (numericChar.length - 1))];
    userPassword.push(passwordChar);
  }

  console.log("val of password char is " + userPassword);

  var remainingLength = passwordLength - userPassword.length;
  console.log("remainingLength is" + remainingLength);

  // fill the the remaining pwd from fullSelection set
  for (var i = 0; i < remainingLength; i++) {
    let passwordChar =
      fullSelectionset[
        Math.floor(Math.random() * (fullSelectionset.length - 1))
      ];
    userPassword.push(passwordChar);
  }
  // convert array into string without commas
  console.log("val of password char is " + userPassword);
  console.log("value of array as string is " + userPassword.join(""));
  return userPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
