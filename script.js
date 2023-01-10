// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options stored in an object
// Maybe I could store these differntly?

// Does this need to be a function or could I just use an object??? Could make my code
function getPasswordOptions() {

  // This is the way I understand how to write objects
  let options = {
    length: prompt("enter a number between 10-64"),
    lowerCase: confirm("would you like lowercase characters?"),
    upperCase: confirm("would you like uppercase characters?"),
    numeric: confirm("would you like numeric characters?"),
    specialCharacters: confirm("would you like special characters?")
  }

  return options;
}


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Variables for storing the random array & generated password
let bigArray = [];
let generatedPassword = "";
let alertShown = false;

// Function to generate password with user input
function generatePassword() {

  const passwordOptions = getPasswordOptions();
  const errorMessage = "Please enter at least 10 characters but no more than 64";

  // if (passwordOptions.length < 10 && passwordOptions.length > 64) {
  //   return errorMessage;
  // }

  if (passwordOptions.lowerCase) {
    bigArray = bigArray.concat(lowerCasedCharacters);
  } 
  if (passwordOptions.upperCase) {
    bigArray = bigArray.concat(upperCasedCharacters);
  }
  if (passwordOptions.numeric) {
    bigArray = bigArray.concat(numericCharacters);
  }
  if (passwordOptions.specialCharacters) {
    bigArray = bigArray.concat(specialCharacters);
  }

// select random character from the bigArray depending on length chosen by user
if (passwordOptions.length <10 || passwordOptions.length >64) {
  alert(errorMessage);
} else {
  for (let i = 0; i < passwordOptions.length; i++) {
    generatedPassword += getRandom(bigArray);
}
}

return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

    passwordText.value = generatedPassword; 
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);