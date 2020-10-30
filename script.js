// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var char = []

  var input1 = prompt('Would you like lowercase characters?\nType Y for YES, leave blank for NO.')
  if (input1 == 'Y') {
    char.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }

  var input2 = prompt('Would you like uppercase characters?\nType Y for YES, leave blank for NO.')
  if (input2 == 'Y') {
    char.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }

  var input3 = prompt('Would you like special characters?\nType Y for YES, leave blank for NO.')
  if (input3 == 'Y') {
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
