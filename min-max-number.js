function maxMinNumber(input) {
  let max = input[0],
    min = input[0];
  for (let i = 1; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
    }
    if (min > input[i]) {
      min = input[i];
    }
  }
  console.log(max, min);
}

maxMinNumber([1, 5, 0, 4, 2, -3, -8]);
