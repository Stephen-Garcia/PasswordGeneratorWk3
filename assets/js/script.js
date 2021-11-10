var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numbers = '0123456789';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialChars = '!@#$%^&*()';
  var password = '';
  var usableChars = '';

  var passwordLength = prompt('Please choose a password length between 8 and 128 characters');

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  }

  else {
    alert('Your password must be between 8 and 128 characters. Please enter a valid password.');
    return '';
  };

  var quesNumbers = confirm('Do you want to use any numeric characters (0-9) for your password?');
  var quesLower = confirm('Do you want to use lowercase letters in your password?');
  var quesUpper = confirm('Do you want to use uppercase letters in your password?');
  var quesSpecial = confirm('Do you want to use special characters in your password?');

  if (quesNumbers) {
    usableChars += numbers
  }

  if (quesLower) {
    usableChars += lowerCase
  }

  if (quesUpper) {
    usableChars += upperCase
  }

  if (quesSpecial) {
    usableChars += specialChars
  }

  if (
    !quesNumbers && !quesLower && quesUpper && quesSpecial
  ) {
    return alert('You must select at least one type of character.');
  };

  for (let i = 0; i < passwordLength; i++) {
    password += usableChars[Math.floor(Math.random() * usableChars.length)];
  }
  return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);