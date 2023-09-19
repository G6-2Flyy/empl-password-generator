// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = lowerCaseLetters.toUpperCase();
var numberOptions = "0123456789";
var specCharOptions = "!*$%#";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passWord = "";
  var passWordOptions = "";
  var length = 0;
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("Please enter a length of your password: "))
  }
    var lowerCase = confirm("Would you like to include lowercase letters in your password?: ")
    var upperCase = confirm("Would you like to include uppercase letters in your password?: ")
    var number = confirm("Would you like to include numbers in your password?: ")
    var specChar = confirm("Would you like to include special characters in your password?: ")
    if (lowerCase) {
    passWord+= getRandom(lowerCaseLetters)
    passWordOptions+= lowerCaseLetters
    }

    if (upperCase) {
      passWord+= getRandom(upperCaseLetters)
      passWordOptions+= upperCaseLetters
      }

    if (number) {
        passWord+= getRandom(numberOptions)
        passWordOptions+= numberOptions
        }
    
    if (specChar) {
          passWord+= getRandom(specCharOptions)
          passWordOptions+= specCharOptions
          }
    
          for (var i = passWord.length; i < length; i++) {
            passWord+= getRandom(passWordOptions)
          }

    return passWord;
}
  function getRandom(str) {
    return str[Math.floor(Math.random() * str.length)]
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


