// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate Password function will generate password
//1. Ask user the lenght of password: has to be b/w 8 -128 chars.
//2. Validate input lenght: check in b/w 8 -128 as well as it should be a number.
//3. Ask user whether want to have a number ,special char,uppercase or lowercase in password.
//4. Check whether user atleast selected one choice.
//5. Generate password.

//array holding numbers,lowercase,uppercase, and special chars for
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
var fullSelectionset = numericChar.concat(
  specialChar,
  upperCasechar,
  lowerCasechar
);

//console.log(fullSelectionset);

function getOthercriteria() {}

function getPasswordcriteria() {
  // ask user for password lenght
  let passwordLength = window.prompt(
    "Please enter required lenght of password? Valid range is  between 8 - 128"
  );
  // Validate input lenght: check in b/w 8 -128 as well as it should be a number.
  console.log("password lenght:" + passwordLength);
  if (passwordLength == null) {
    alert("Userdont want to quit");
    return;
  } else if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    console.log("inside incorrect  length");
    window.alert("Please provide valid password length");
    getPasswordcriteria();
  }
  // else {
  //ask user for numeric char, special char ,uppercase,lowercase
  //index 0 : special char, 1: uppercase, 2:lowercase, 3:numeric
  // let otherCriteria = [];
  // otherCriteria = getOthercriteria();
  //}

  //return;
}

function generatePassword() {
  // get user inputs
  getPasswordcriteria();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
