// Define arrays of characters to include in the password
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialCharacters = "!@#$%^&*()_-+={}[]\\|:;\"',.<>/?".split("");

// Define a function to generate a password based on user-selected criteria
function generatePassword() {
  // Prompt the user for the desired length of the password
  let passwordLength = parseInt(
    prompt("How many characters should the password be? (8-128)")
  );

  // Validate the user's input for password length
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(
      prompt("Please enter a valid number between 8 and 128.")
    );
  }

  // Prompt the user to confirm which character types to include in the password
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialCharacters = confirm("Include special characters?");

  // Initialize an array to hold the available characters based on user-selected criteria
  let availableCharacters = [];

  if (includeLowercase) {
    availableCharacters = availableCharacters.concat(lowercaseLetters);
  }

  if (includeUppercase) {
    availableCharacters = availableCharacters.concat(uppercaseLetters);
  }

  if (includeNumbers) {
    availableCharacters = availableCharacters.concat(numbers);
  }

  if (includeSpecialCharacters) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }

  // Generate a password by selecting random characters from the availableCharacters array
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }

  return password;
}

// Get references to the #generate and #password elements
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);