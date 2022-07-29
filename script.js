// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function printForecast(arr) {
  let finalString = '';
  for (let i = 0; i < arr.length; i++) {
    finalString += `... ${arr[i]}*C in ${i + 1} days `;
  }
  console.log(`${finalString}...`);
}

printForecast([12, 5, -5, 0, 4]);
