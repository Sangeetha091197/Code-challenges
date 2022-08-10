function isPalindrome(inputString) {
  let tempString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    tempString += inputString[i];
  }
  tempString = tempString.toLowerCase();
  inputString = inputString.toLowerCase();
  if (tempString === inputString) {
    console.log('It is a palindrome.');
  } else {
    console.log('It is not a palindrome.');
  }
}

isPalindrome('Sas');
