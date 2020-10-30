// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var char = []

  var input1 = confirm('Would you like lowercase characters?')
  if (input1) {
    char.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }

  var input2 = confirm('Would you like uppercase characters?')
  if (input2) {
    char.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }

  var input3 = confirm('Would you like special characters?')
  if (input3) {
    char.push("!", "?", "@", "$", "%", "#", "^", "&", "*", "_", "+")
  }

  var passLength = prompt('How many characters would you like?')

  function generatePassword() {
    pass = "";
    for (var i = 0; i <= passLength; ++i) {
      pass += char[Math.floor(Math.random() * char.length)];
    }
    return pass;
  }

  // Writing the password...
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}
