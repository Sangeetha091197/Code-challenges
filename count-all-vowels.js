function countAllVowels(inputString) {
  let count = 0,
    vowels = ['a', 'e', 'i', 'o', 'u'];
  inputString = inputString.toLowerCase();
  for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
      count++;
    }
  }
  console.log(count);
}

countAllVowels('Sangeetha');
