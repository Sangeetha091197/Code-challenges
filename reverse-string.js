function reverseString(inputString) {
  let tempString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    tempString += inputString[i];
  }
  console.log(tempString);
}

reverseString('Sangeetha');
